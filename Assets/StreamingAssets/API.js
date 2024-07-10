document.getElementById("ask").addEventListener("click", function () {
    sendToChatGPT();
  });
  
  //NOTE : don't share your secret code as it may change you , if secret  goes to git or other version control system
  
  function sendToChatGPT() {
    let value = document.getElementById("QAS").value;
    let body = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: value }],
      tempreture: "1",
    };
  
    let headers = {
      Authorization: "paste your secret key here",
    };
  
    axios
      .post("https://api.openai.com/v1/chat/completions", body, {
        headers: headers,
      })
      .then((response) => {
        let reply = response.data.choices[0].message.content;
       // document.getElementById("reply-content").textContent = reply;
       golbalthis_agent.speak(reply);
      });
  }
  