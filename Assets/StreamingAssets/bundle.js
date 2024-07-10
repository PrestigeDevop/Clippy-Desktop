
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var availableAgents = ['Bonzi', 'Clippy', 'F1', 'Genie', 'Genius', 'Links', 'Merlin', 'Peedy', 'Rocky', 'Rover']

var talks = [
    'How can i help you?',
    'Nice day!',
    'Glad to meet you.',
    'At your service',
    'Helloo'
]

const randPos = () => .2 + Math.random() * .6

function nextAgent () {
    let agentName = availableAgents.pop()
    if (!agentName) return;

    clippy.load(agentName, agent => {
        window[agentName] = agent

        const move = () => {
            agent.moveTo($(document).width() * randPos(), $(document).height() * randPos())
        }

        move()

        agent.show();

        // Speak on click and start
        const speak = () => {
            agent.speak('I am ' + agentName + ', ' + talks[~~(Math.random() * talks.length)])
            agent.animate()
        }
        $(agent._el).click(() => speak())
        speak()
        
        // Animate randomly
        setInterval(() => {
            agent.animate()
        }, 3000 + (Math.random() * 4000))
        // Move randomly
        setTimeout(nextAgent, 2000)
    });
}

nextAgent()
},{}]},{},[1]);
