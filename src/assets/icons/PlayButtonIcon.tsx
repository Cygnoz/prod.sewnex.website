
type Props = {
    size?:number;
    color?:string;
}

const PlayButtonIcon = ({size=30, color}: Props) => {
  return (
<svg width={size} height={size} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_1610_1381)">
<path d="M25.2259 0.752441C20.2909 0.752441 15.4667 2.21585 11.3633 4.95761C7.26001 7.69937 4.06185 11.5963 2.17329 16.1557C0.284737 20.7151 -0.209396 25.7321 0.753383 30.5723C1.71616 35.4125 4.09261 39.8586 7.58221 43.3482C11.0718 46.8378 15.5178 49.2142 20.358 50.177C25.1983 51.1398 30.2153 50.6456 34.7746 48.7571C39.334 46.8685 43.231 43.6704 45.9728 39.567C48.7145 35.4637 50.1779 30.6395 50.1779 25.7044C50.1779 22.4277 49.5325 19.183 48.2786 16.1557C47.0246 13.1284 45.1867 10.3777 42.8697 8.06071C40.5526 5.7437 37.802 3.90575 34.7746 2.6518C31.7473 1.39784 28.5027 0.752441 25.2259 0.752441ZM20.2355 36.9328V14.476L35.2067 25.7044L20.2355 36.9328Z" fill={color?color:"white"} fill-opacity="0.8"/>
</g>
<defs>
<filter id="filter0_i_1610_1381" x="0.273926" y="-2.28756" width="49.9041" height="52.9441" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3.04"/>
<feGaussianBlur stdDeviation="4.332"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1610_1381"/>
</filter>
</defs>
</svg>
  )
}

export default PlayButtonIcon