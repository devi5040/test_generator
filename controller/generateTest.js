// const client = require("../util/chat-gpt");
const { model } = require("../util/geminiClient");

exports.getUnitTestPage = async (req, res, next) => {
  res.render("unit-test");
};

exports.generateUnitTest = async (req, res, next) => {
  const functionCode = req.body.function;
  const testFramework = "jest";
  const prompt = `You are an expert JavaScript developer and Jest testing engineer. 
I will provide a function or module. Generate a **complete Jest test suite** in a robust, error-proof style:
1. Mock all external dependencies using \`jest.mock()\` at the top level outside any function's describe(Note: You need to mock all the functionalities of the external dependencies for example db retrieval functions, aws s3 configs, etc). for example if you are mocking a model then you should mock the functions used there like Model.create(), model.find(),etc.
2. then import the function or provide a placeholder to do that.
3. Start describing the tests for functions one by one using describe().
4. Use \`beforeAll\`, \`beforeEach\`, \`afterAll\` to set up and clean environment variables, mocks, or any global state, Use whenever needed do not overdo it. Do not clear mocks which are not created first create those mock functions and then clear that.
5. Handle async functions properly using \`async/await\` and \`mockResolvedValue\` / \`mockRejectedValue\`.
6. Include tests for:
   - Normal successful execution
   - Error handling (promise rejections or thrown errors)
   - Edge cases: null, undefined, empty strings, invalid values( Consider we have validations for empty inputs)
   - Environment variable usage
   - Dynamic values (e.g., timestamps in keys)
7. Use clear \`describe\` and \`it\` blocks.
8. Ensure tests are independent and will not throw unexpected errors.
9. Use proper \`expect\` statements for return values, called arguments, and behavior.
10. Restore any spies or mocks after usage.

Here is the code to generate test:${functionCode}.

Example test file:
'''const {
  createUser,
  getUserByMobileNumber,
} = require("../../services/user.service");
const { User } = require("../../models");
const logger = require("../../utils/logger");

// Mock logger
jest.mock("../../utils/logger", () => ({
  info: jest.fn(),
  error: jest.fn(),
}));

// Mock User model
jest.mock("../../models", () => ({
  User: {
    findAll: jest.fn(),
    create: jest.fn(),
  },
}));
describe tests below-'''`;

  if (!functionCode) {
    return res.send("Function code is empty");
  }

  try {
    const result = await model.generateContent(prompt);
    console.log(
      JSON.stringify(result.response.candidates[0].content.parts[0].text)
    );

    const finalResponse = `<pre><code class="language-javascript">${result.response.candidates[0].content.parts[0].text}</code></pre>`;
    res.send(finalResponse.replace(/```(\w+)?/g, "").trim());
  } catch (error) {
    res.send(`error: ${error}`);
  }
};

exports.getIntegrationTestPage = async (req, res, next) => {
  res.render("integration-test");
};

exports.generateIntegrationTest = async (req, res, next) => {
  const functionCode = req.body.function;
  const testFramework = "supertest";
  const prompt = `You are an intelligent ai integration test generation system. Who will generate tests for ${testFramework} framework. You will go through the given function/method code completely to understand it's scope, inputs, outputs, dependencies and then will generate the formatted response which will contain the different unit tests seperated by new line. The function code is: ${functionCode}. provide the response in html renderable format. do not add any extra spaces at the starting or end of the text and do not include the statement telling html provide only the html fragment without anything extra content or spaces also provide styling if possible. Do not include \`\`\` or 'html' in the fragment. While styling make it more attractive and make it accessible for copying the text.`;

  if (!functionCode) {
    return res.send("Function code is empty");
  }

  try {
    const result = await model.generateContent(prompt);
    console.log(
      JSON.stringify(result.response.candidates[0].content.parts[0].text)
    );

    const finalResponse = `<pre><code class="language-javascript">${result.response.candidates[0].content.parts[0].text}</code></pre>`;
    res.send(finalResponse.replace(/```(\w+)?/g, "").trim());
  } catch (error) {
    res.send(`error: ${error}`);
  }
};
