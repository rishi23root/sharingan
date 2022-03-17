function simple_eye() {
  document.querySelectorAll('.eyevector').forEach(ele => {
    ele.classList.add('simpleEye')
  })
}

function getdigree(angle, by = 10) {
  angle -= by
  if (angle < 0) {
    angle = 360
  }
  return angle
}

function letRotate() {
  let angle = 0;
  let by = 0;
  let timelineSec = [1000, 2000, 1000, 2500, 1500, 500]
  //               [ 0    , 5 ,   15,  5   , 0]
  setTimeout(() => {
    setTimeout(() => {
      by = 5
      setTimeout(() => {
        by = 15
        setTimeout(() => {
          by = 3
          setTimeout(() => {
            by = 0
          }, timelineSec[4]);
        }, timelineSec[3]);
      }, timelineSec[2]);
    }, timelineSec[1]);
  }, timelineSec[0]);

  document.querySelectorAll('.commaRotateit').forEach(ele => {
    const timeout = setInterval(() => {
      angle = getdigree(angle, by)
      ele.setAttribute("transform", `rotate(${angle})`);
    }, 90);

    setTimeout(() => {
      clearInterval(timeout)
    }, 8000);
  })
}

const starting = "M477 0H0V234H477V0ZM60.3378 128.989C61.7366 128.595 63.2255 128.176 65 127.5L125 108.5L182 100.5L288 87.5L392.5 70.5L435.5 62L461.5 56V62L460 70.5L449.5 94L428 120L409.5 139L384 157.5L366 166.5L334 179L312.5 184.5L296.5 188.5L261 191L216 191.5L187.5 191L150 189L127 185.5L103 182.5L88.5 181L76 179L58.5 176.5L45.5 173L28.5 167L23 160.5C48.7609 132.246 53.4599 130.924 60.3378 128.989Z"
const middle1 = "M477 0H0V234H477V0ZM86.6605 113.065C88.9864 111.765 90.7826 110.761 92 110L140 90L182.5 76L259.5 54.5L329.5 40.5L401 28L443 22L473.5 21L465.5 56.5L448 104L422 147L392 181L363 200.5L333.5 212L295.5 220.5L265.5 223.5L234.5 226.5L206.5 225.5L177 222.5L143.5 219.5L110.5 211.5L85 207L66 203L43.5 202.5L31.5 199.5L21.5 196L11 186.5L7 180V171.5C44.3045 136.739 73.702 120.308 86.6605 113.065Z"
const supperBig = "M477 0H0V234H477V0ZM62.5018 86.1891C63.43 85.5289 64.4012 84.9293 65.5398 84.2188L118.643 58.4375L166.783 44.8438L263.559 21.4062L340.484 8.75L413.934 5H451.652H472L467.533 50L451.652 99.6875L431.801 132.969L405.497 168.594L384.157 188.281L354.38 206.562L319.639 218.75L291.847 226.719L263.559 230H223.856L186.634 226.719L153.383 222.969L125.094 217.344L105.739 210.312L71.9915 204.219L51.6437 201.875L38.2439 199.062L25.3404 192.969L14.9183 188.281L7.97031 180.781L4 171.875C51.4468 98.6925 55.8784 90.8999 62.5018 86.1891Z"
const middle2 = "M477 0H0V234H477V0ZM79.1001 70.3969C79.436 70.1786 79.7632 69.966 80.0829 69.7559L139.271 53.4325L176.077 42.5503L304.897 13.8608L357.619 6.44111L427.252 1H471.021H475L469.529 42.0557L458.089 93.0043L438.194 128.124L411.833 165.717L390.446 186.493L360.603 205.784L325.787 218.645L297.934 227.054L269.583 230.516L237.254 232H198.459L169.113 228.537L131.313 223.096L107.936 217.161L75.6065 209.741L56.7062 205.289L44.2718 203.31L31.8374 200.837L18.4082 194.901L9.4554 186.493L1 172.148C53.3473 87.1324 69.6795 76.5189 79.1001 70.3969Z"

let eyesvgCointainer = document.querySelectorAll('.eyecointainer')

const choice = Math.floor(Math.random() * 2 + 0)

eyesvgCointainer.forEach((cointainer, index) => {
  // sharingun - x="10%" y="-3%" width="20vw" height="30vh"
  // rinneganItself - x="-20%" y="-43%" width="35vw" height="50vh"
  cointainer.innerHTML = `
    <svg class="eye" viewBox="0 0 479 235" preserveAspectRatio="none">
    ${!choice ?

      `<svg class="rinneganItself"   viewBox="0 0 403 376" fill="none">
      <g transform="scale(1.95) translate( -100 -77.5 )" filter="url(#filter0_f_111_8)">
      <path d="M400.5 188C400.5 290.416 311.438 373.5 201.5 373.5C91.5618 373.5 2.5 290.416 2.5 188C2.5 85.5836 91.5618 2.5 201.5 2.5C311.438 2.5 400.5 85.5836 400.5 188Z" fill="#C6B6CE" stroke="black"/>
      <path d="M374.5 187.5C374.5 275.281 298.198 346.5 204 346.5C109.802 346.5 33.5 275.281 33.5 187.5C33.5 99.7189 109.802 28.5 204 28.5C298.198 28.5 374.5 99.7189 374.5 187.5Z" fill="#C6B6CE" stroke="black"/>
      <path d="M259.5 191C259.5 220.522 234.23 244.5 203 244.5C171.77 244.5 146.5 220.522 146.5 191C146.5 161.478 171.77 137.5 203 137.5C234.23 137.5 259.5 161.478 259.5 191Z" fill="#AE9ABD" stroke="black"/>
      <path d="M299.5 190C299.5 240.509 256.321 281.5 203 281.5C149.679 281.5 106.5 240.509 106.5 190C106.5 139.491 149.679 98.5 203 98.5C256.321 98.5 299.5 139.491 299.5 190Z" stroke="black"/>
      <path d="M336.5 187.5C336.5 255.951 276.987 311.5 203.5 311.5C130.013 311.5 70.5 255.951 70.5 187.5C70.5 119.049 130.013 63.5 203.5 63.5C276.987 63.5 336.5 119.049 336.5 187.5Z" stroke="black"/>
      <circle cx="203.5" cy="191.5" r="12.5" fill="#171717"/>
      </g>
      <defs>
      <filter id="filter0_f_111_8" x="0" y="0" width="403" height="376" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_111_8"/>
      </filter>
      </defs>
    </svg>
    ` :

      `<svg class="sharinganItself"  viewBox="0 0 710 711" fill="none">
