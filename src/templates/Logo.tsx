type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-100 inline-flex items-center ${fontStyle}`}>
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        width={size}
        height={size}
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 110.99997 120.00004"
        version="1.1"
        id="svg68"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs58">
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="a"
            x1="87.309998"
            x2="7662.6299"
            y1="3022.4099"
            y2="14087.64"
          >
            <stop offset="0" stopColor="#004790" id="stop53" />
            <stop offset="1" stopColor="#1297e0" id="stop55" />
          </linearGradient>
        </defs>
        <g id="g66" transform="scale(0.008,0.0077)">
          <path
            d="M 6348.16,5590.89 8916.54,7073.7 10687.81,6051.09 V 3085.38 L 5343.87,0 3127.55,1279.53 8471.59,4364.91 Z"
            fill="#0067b0"
            id="path60"
          />
          <path
            d="M 7912.25,7653.67 0,3085.38 V 6051.09 L 8536.06,10979.42 5343.87,12822.36 0,9736.98 v 2604.18 l 5343.87,3085.29 5343.94,-3085.29 v -3085.1 z"
            fill="url(#a)"
            id="path62"
          />
          <path
            d="M 8471.59,4364.91 10687.81,3085.38 7791.94,3972.5 Z"
            fill="#003780"
            id="path64"
          />
        </g>
      </svg>

      {/* {AppConfig.site_name} */}
    </span>
  );
};

export { Logo };
