// const client = require("../util/chat-gpt");
const { model } = require("../util/geminiClient");

exports.getUnitTestPage = async (req, res, next) => {
  res.render("unit-test");
};

exports.generateUnitTest = async (req, res, next) => {
  const functionCode = req.body.function;
  const testFramework = "jest";
  const prompt = `You are an intelligent ai unit test generation system. Who will generate tests for ${testFramework} framework. You will go through the given function/method code completely to understand it's scope, inputs, outputs, dependencies and then will generate the formatted response which will contain the different unit tests seperated by new line. The function code is: ${functionCode}. provide the response in html renderable format. do not add any extra spaces at the starting or end of the text and do not include the statement telling html provide only the html fragment without anything extra content or spaces also provide styling if possible. Do not include \`\`\` or 'html' in the fragment. While styling make it more attractive and make it accessible for copying the text.`;

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
  const testFramework = "jest";
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
