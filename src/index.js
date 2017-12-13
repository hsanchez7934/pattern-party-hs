$('.tabs').on('mouseenter', changeText);
$('#mobile-tab1').on('click', toggleContentBox1);
$('#mobile-tab2').on('click', toggleContentBox2);
$('#mobile-tab3').on('click', toggleContentBox3);
$('#mobile-tab4').on('click', toggleContentBox4);

function changeText() {
  const title = $('#info-title');
  const text1 = $('#info-text-top');
  const text2 = $('#info-text-bottom');
  const image = $('#tabs-image');
  const random = getRandomIntInclusive(0, 3);
  title.text(textArray[random].title);
  text1.text(textArray[random].text1);
  text2.text(textArray[random].text2);
  image.css('background-image', textArray[random].image);
  $(this).toggleClass('tabs-active');
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleContentBox1() {
  const icon = $('#tab-icon1').attr('src');
  if(icon === './assets/plus.svg'){
    $('#tab-icon1').attr('src', './assets/minus.svg');
  } else if (icon === './assets/minus.svg') {
    $('#tab-icon1').attr('src', './assets/plus.svg');
  }
  $('#content-box1').toggleClass('content-box-show');
  $(this).toggleClass('mobile-tabs-active');
}

function toggleContentBox2() {
  const icon = $('#tab-icon2').attr('src');
  if(icon === './assets/plus.svg'){
    $('#tab-icon2').attr('src', './assets/minus.svg');
  } else if (icon === './assets/minus.svg') {
    $('#tab-icon2').attr('src', './assets/plus.svg');
  }
  $('#content-box2').toggleClass('content-box-show');
  $(this).toggleClass('mobile-tabs-active');
}

function toggleContentBox3() {
  const icon = $('#tab-icon3').attr('src');
  if(icon === './assets/plus.svg'){
    $('#tab-icon3').attr('src', './assets/minus.svg');
  } else if (icon === './assets/minus.svg') {
    $('#tab-icon3').attr('src', './assets/plus.svg');
  }
  $('#content-box3').toggleClass('content-box-show');
  $(this).toggleClass('mobile-tabs-active');
}

function toggleContentBox4() {
  const icon = $('#tab-icon4').attr('src');
  if(icon === './assets/plus.svg'){
    $('#tab-icon4').attr('src', './assets/minus.svg');
  } else if (icon === './assets/minus.svg') {
    $('#tab-icon4').attr('src', './assets/plus.svg');
  }
  $('#content-box4').toggleClass('content-box-show');
  $(this).toggleClass('mobile-tabs-active');
}

var textArray = [
  {
    title: `It was a dog. It was a big dog.`,
    text1: `But we've met before. That was a
            long time ago, I was a kid at St.
            Swithin's, It used to be funded by
            the Wayne Foundation. It's an orphanage.
            My mum died when I was small, it was a car
            accident. I don't remember it. My dad got shot
            a couple of years later for a gambling debt.
            Oh I remember that one just fine. Not a lot of
            people know what it feels like to be angry in your
            bones. I mean they understand.`,
    text2: `The fosters parents. Everybody understands,
            for a while. Then they want the angry little kid
            to do something he knows he can't do, move on.
            After a while they stop understanding. They send
            the angry kid to a boy's home, I figured it out
            too late. Yeah I learned to hide the anger, and practice
            smiling in the mirror. It's like putting on a mask. `,
    image: `url(./assets/batman.jpg)`
  },
  {
    title: 'I am the League of Shadows.',
    text1: `You wanna know how I got them? So I had a wife.
            She was beautiful, like you, who tells me I worry
            too much, who tells me I ought to smile more, who
            gambles and gets in deep with the sharks. Hey. One
            day they carve her face. And we have no money for
            surgeries. She can't take it. I just wanna see her
            smile again. I just want her to know that I don't
            care about the scars.`,
    text2: `Breathe in your fears. Face them. To conquer fear,
            you must become fear. You must bask in the fear of
            other men. And men fear most what they cannot see.
            You have to become a terrible thought. A wraith.
            You have to become an idea! Feel terror cloud your
            senses.`,
    image: `url(./assets/joker.jpg)`
  },
  {
    title: `Bats frighten me. It's time my enemies shared my dread.`,
    text1: `No, no, no. A vigilante is just a man lost in scramble
            for his own gratification. He can be destroyed or locked
            up. But if you make yourself more than just a man, if
            you devote yourself to an idel and if they can't stop
            you then you become something else entirely. Legend,
            Mr Wayne.`,
    text2: `Every year, I took a holiday. I went to Florence,
            this cafe on the banks of the Arno. Every fine evening,
            I would sit there and order a Fernet Branca. I had this
            fantasy, that I would look across the tables and I would
            see you there with a wife maybe a couple of kids.`,
    image: `url(./assets/bane.jpeg)`
  },
  {
    title: `I just want my phone call.`,
    text1: `But I know the rage that drives you.
            That impossible anger strangIing the grief until
            the memory of your loved one is just poison in your
            veins. And one day, you catch yourself wishing the
            person you loved had never existed so you'd be spared
            your pain. Criminals thrive on the indulgence of
            society's understanding.`,
    text2: `Let me get this straight. You think that your client,
            one of the wealthiest, most powerful men in the world
            is secretly a vigilante who spends his nights beating
            criminals to a pulp with his bare hands and your plan
            is to blackmail this person? Good luck.`,
    image: `url(./assets/harvey.jpg)`
  }
]
