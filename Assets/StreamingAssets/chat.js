import {LLM} from "./llm.js";

// State variable to track model load status
var model_loaded = false;

// Initial Prompt
var initial_prompt = "what is the name of the kingdom of ksa?"

// Callback functions
const on_loaded = () => { 
    model_loaded = true; 
}
const write_result = (text) => { document.getElementById('result').innerText += text + "\n" 

    golbalthis_agent.speak(text);
}
const run_complete = () => {}

// Configure LLM app
const app = new LLM(
     // Type of Model
    'GGUF_CPU',

    // Model URL
    'https://huggingface.co/bartowski/gemma-2-9b-it-GGUF/resolve/main/gemma-2-9b-it-IQ4_XS.gguf',

    // Model Load callback function
    on_loaded,          

    // Model Result callback function
    write_result,       

     // On Model completion callback function
    run_complete       
);

// Download & Load Model GGML bin file
app.load_worker();

// Trigger model once its loaded
//const checkInterval = setInterval(timer, 5000);

const checkInterval = setInterval(timer, 5000);

function timer() {
    if(model_loaded){
            app.run({
            prompt: initial_prompt,
            max_token_len: 500,
            context_size:512

        });
        clearInterval(checkInterval);
    } else{
        console.log('Waiting...')
        golbalthis_agent.speak("loading the model...");

    }
}