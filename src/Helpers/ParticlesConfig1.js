export const options = {
    "fullScreen": {
        "enable": true,
        "zIndex": 1
    },
    "particles": {
        "number": {
            "value": 80
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": { "min": 0.1, "max": 0.5 },
            "animation": {
                "enable": true,
                "speed": 3,
                "sync": false
            }
        },
        "size": {
            "value": { "min": 1, "max": 50 }
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "outModes": "out"
        }
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": true,
                "mode": "repulse"
            },
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 200
            },
            "push": {
                "quantity": 4
            }
        }
    },
    "absorbers": {
        "size": {
            "value": { "min": 5, "max": 10 },
            "limit": 100
        },
        "position": {
            "x": 50,
            "y": 50
        }
    },
    "background": {
        "color": "#0d47a1"
    }
}