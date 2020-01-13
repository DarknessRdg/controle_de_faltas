const styles = {
    width: '100%',
    color: '#000000',
    position: "absolute",
    top: "0"
}

const params = {
    particles: {
        number: {
            value: 40,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#000000"
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 1,
                color: '#878787'
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.4,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 400,
            color: "#000000",
            opacity: 0.1,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 2,
            random: true
        },
    }
}

const interactivity = {
    detect_on: "window",
    events: {
        onresize: {
            enable: true,
            density_auto: true,
            density_area: 300 
      },
      onhover: {
          enable: true,
          mode: "grab",
          distance: 150
      },
    },
    modes: {
        repulse: {
            distance: 200,
            duration: 0.2
        }
    }
}

module.exports = {styles, params, interactivity}