import ReactTooltip from "react-tooltip";

type Props = {
  comment: string;
};

export const SpeechBalloon = (props: Props) => {
  const { comment } = props;

  const baloonSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="32.545"
        viewBox="0 0 37 32.545"
        className="cursor-pointer transform hover:scale-110 transition duration-500"
      >
        <g id="合体_1" data-name="合体 1" transform="translate(2307 78)" fill="#fff">
          <path
            d="M -2298.249755859375 -46.79837799072266 L -2298.249755859375 -50.41441345214844 L -2298.249755859375 -50.98169326782227 L -2298.795654296875 -51.13609313964844 C -2300.89990234375 -51.7313117980957 -2302.79638671875 -53.02028274536133 -2304.135986328125 -54.76557159423828 C -2305.518798828125 -56.56713104248047 -2306.249755859375 -58.72303009033203 -2306.249755859375 -61.00020217895508 L -2306.249755859375 -66.99960327148438 C -2306.249755859375 -72.65186309814453 -2301.65185546875 -77.25030517578125 -2296 -77.25030517578125 L -2280.999755859375 -77.25030517578125 C -2275.347900390625 -77.25030517578125 -2270.749755859375 -72.65186309814453 -2270.749755859375 -66.99960327148438 L -2270.749755859375 -61.00020217895508 C -2270.749755859375 -55.34844207763672 -2275.347900390625 -50.75040054321289 -2280.999755859375 -50.75040054321289 L -2291.62255859375 -50.75040054321289 L -2291.8349609375 -50.75040054321289 L -2292.015869140625 -50.63894271850586 L -2298.249755859375 -46.79837799072266 Z"
            stroke="none"
          />
          <path
            d="M -2297.499755859375 -48.14136123657227 L -2292.409423828125 -51.27749252319336 L -2292.047607421875 -51.50040054321289 L -2291.62255859375 -51.50040054321289 L -2280.999755859375 -51.50040054321289 C -2275.761474609375 -51.50040054321289 -2271.499755859375 -55.76199340820312 -2271.499755859375 -61.00020217895508 L -2271.499755859375 -66.99960327148438 C -2271.499755859375 -72.23830413818359 -2275.761474609375 -76.50030517578125 -2280.999755859375 -76.50030517578125 L -2296 -76.50030517578125 C -2301.23828125 -76.50030517578125 -2305.499755859375 -72.23830413818359 -2305.499755859375 -66.99960327148438 L -2305.499755859375 -61.00020217895508 C -2305.499755859375 -58.88963317871094 -2304.822509765625 -56.89163208007812 -2303.541015625 -55.22222137451172 C -2302.29931640625 -53.60418319702148 -2300.541259765625 -52.40933227539062 -2298.591552734375 -51.85778045654297 L -2297.499755859375 -51.54897308349609 L -2297.499755859375 -50.41441345214844 L -2297.499755859375 -48.14136123657227 M -2298.999755859375 -45.45540237426758 L -2298.999755859375 -50.41441345214844 C -2303.616455078125 -51.72031021118164 -2306.999755859375 -55.96526336669922 -2306.999755859375 -61.00020217895508 L -2306.999755859375 -66.99960327148438 C -2306.999755859375 -73.07550048828125 -2302.074951171875 -78.00030517578125 -2296 -78.00030517578125 L -2280.999755859375 -78.00030517578125 C -2274.924560546875 -78.00030517578125 -2269.999755859375 -73.07550048828125 -2269.999755859375 -66.99960327148438 L -2269.999755859375 -61.00020217895508 C -2269.999755859375 -54.92520141601562 -2274.924560546875 -50.00040054321289 -2280.999755859375 -50.00040054321289 L -2291.62255859375 -50.00040054321289 L -2298.999755859375 -45.45540237426758 Z"
            stroke="none"
            fill="#707070"
          />
        </g>
        <circle
          id="楕円形_13"
          data-name="楕円形 13"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(11 13)"
          fill="#707070"
        />
        <circle
          id="楕円形_14"
          data-name="楕円形 14"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(17 13)"
          fill="#707070"
        />
        <circle
          id="楕円形_15"
          data-name="楕円形 15"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(23 13)"
          fill="#707070"
        />
      </svg>
    );
  };

  return (
    <>
      <button data-tip data-for="speechBalloon" className="focus:outline-none">
        {baloonSvg()}
      </button>
      <ReactTooltip id="speechBalloon" type="dark">
        <span>comment</span>
      </ReactTooltip>
    </>
  );
};
