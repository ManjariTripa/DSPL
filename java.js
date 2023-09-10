function talk()
{
    var que={
        "hello":"hello,whatsupp!!",
        "what is your name?":"i m voice recginition chatbot and my name is MR.BOT",
        'bye':'byeeeeee..see you soon',
        'ok':'thnk you so much',
        'how are you?':'i am fine ,thank you....what about you?',
        'are you a chatbot?':"yes! manjari created meh....:)",
        'tell me a joke': "Sure, here's one: Why did the scarecrow win an award? Because he was outstanding in his field!",
        "help": "I'm here to assist you with any questions or tasks you have. Feel free to ask anything.",
        "what's the weather today?": "I'm sorry, I cannot provide real-time weather information. You can check a weather website or app for the latest updates.",
    };


    var user = document.getElementById("userBox").value;
    document.getElementById("answer").innerHTML=user+"<br>";

    if(user in que)
    {
        document.getElementById("answer").innerHTML=que[user]+"<br>";

    }

    else{
        document.getElementById("answer").innerHTML=
        "sorry,I didn't understood what you said!";
    }
};
