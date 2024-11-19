const MAX_SNOWFLAKE_SIZE = 5;
  const MAX_SNOWFLAKE_SPEED = 1;
  const SNOWFLAKE_COLOUR = '#d3e0eb';
  var snowflakes = [];

  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0px';
  canvas.style.zIndex = 100;
  canvas.style.pointerEvents = 'none';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  var number_of_snowflakes = canvas.width / 7;

  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE +1),
    colour: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 3,
    sway: Math.random() - 0.5
  });

  const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0 , Math.PI * 2);
    ctx.fillStyle = snowflake.colour;
    ctx.fill();
    ctx.closePath();
  };

  const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;
    if (snowflake.y > canvas.height) {
      Object.assign(snowflake, createSnowflake());
    }
  };

  const animate = () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    snowflakes.forEach(snowflake => {
      updateSnowflake(snowflake);
      drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
  };

function generateSnowflakes(){
    for (let i = 0; i < number_of_snowflakes; i++ ) {
        snowflakes.push(createSnowflake());
      }
}

generateSnowflakes()
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // recalculate & recreate snowflakes
    number_of_snowflakes = canvas.width / 7;
    snowflakes = []
    generateSnowflakes()
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY < 4000 ) {
      canvas.style.top = `${window.scrollY}px`;
    } else {
      canvas.style.top = 3980
    }
  });


animate()
