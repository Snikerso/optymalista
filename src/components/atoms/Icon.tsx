import { MediumIcon } from "./icons/Medium.icon";
import { OpenTabIcon } from "./icons/OpenTab.icon";
import { QuizIcon } from "./icons/Quiz.icon";

const icons = {
  quiz: QuizIcon,
  medium: MediumIcon,
  openTab: OpenTabIcon,
};

interface Props {
  iconName: keyof typeof icons;
  size?: number;
}
export type IconProps = {
  size: number;
};

export const Icon = ({ iconName, size = 24 }: Props) => {
  const IconComponent = icons[iconName];
  return <IconComponent size={size} />;
};

export const IconSolid = () => (
  <svg
    className="  saturate-150 text-green-10"
    fill="none"
    height="32"
    id="status-icon"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
      <rect fill="#000" height="32" rx="8" width="32"></rect>
      <rect
        fill="url(#b)"
        fill-opacity="0.3"
        height="32"
        rx="8"
        width="32"
      ></rect>
      <rect
        fill="currentColor"
        fill-opacity="0.05"
        height="32"
        rx="8"
        width="32"
      ></rect>
      <rect
        height="29"
        rx="6.5"
        stroke="#000"
        stroke-width="3"
        width="29"
        x="1.5"
        y="1.5"
      ></rect>
      <rect
        height="31"
        rx="7.5"
        stroke="url(#c)"
        width="31"
        x="0.5"
        y="0.5"
      ></rect>
      <g filter="url(#d)">
        <circle
          cx="16"
          cy="16"
          r="4.5"
          stroke="currentColor"
          stroke-opacity="1"
          stroke-width="5"
        ></circle>
      </g>
      <g filter="url(#e)">
        <circle
          cx="16"
          cy="16"
          r="3.5"
          stroke="currentColor"
          stroke-opacity="1"
          stroke-width="5"
        ></circle>
      </g>
      <mask
        height="30"
        id="g"
        maskUnits="userSpaceOnUse"
        width="30"
        x="1"
        y="1"
        style={{ maskType: "alpha" }}
      >
        <path d="M1.637 1.636h29.091v29.091H1.637z" fill="url(#f)"></path>
      </mask>
      <g mask="url(#g)">
        <path
          d="M.5.5h5v5h-5zM5.5.5h5v5h-5z"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <path d="M11 1h4v4h-4z" fill="#fff" fill-opacity="0.1"></path>
        <path
          d="M10.5.5h5v5h-5zM15.5.5h5v5h-5zM20.5.5h5v5h-5z"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <path d="M26 1h4v4h-4z" fill="#fff" fill-opacity="0.1"></path>
        <path d="M25.5.5h5v5h-5z" stroke="#fff" stroke-opacity="0.07"></path>
        <path
          d="M.5 5.5h5v5h-5z"
          opacity="0.4"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <g opacity="0.4">
          <path d="M6 6h4v4H6z" fill="#fff" fill-opacity="0.06"></path>
          <path d="M5.5 5.5h5v5h-5z" stroke="#fff" stroke-opacity="0.07"></path>
        </g>
        <path
          d="M10.5 5.5h5v5h-5z"
          opacity="0.4"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <g opacity="0.4">
          <path d="M16 6h4v4h-4z" fill="#fff" fill-opacity="0.06"></path>
          <path
            d="M15.5 5.5h5v5h-5z"
            stroke="#fff"
            stroke-opacity="0.07"
          ></path>
        </g>
        <path
          d="M20.5 5.5h5v5h-5zM25.5 5.5h5v5h-5z"
          opacity="0.4"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <path d="M1 11h4v4H1z" fill="#fff" fill-opacity="0.1"></path>
        <path
          d="M.5 10.5h5v5h-5zM5.5 10.5h5v5h-5zM10.5 10.5h5v5h-5zM15.5 10.5h5v5h-5z"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <path d="M21 11h4v4h-4z" fill="#fff" fill-opacity="0.06"></path>
        <path
          d="M20.5 10.5h5v5h-5zM25.5 10.5h5v5h-5zM.5 15.5h5v5h-5zM5.5 15.5h5v5h-5zM10.5 15.5h5v5h-5zM15.5 15.5h5v5h-5zM20.5 15.5h5v5h-5z"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <path d="M26 16h4v4h-4z" fill="#fff" fill-opacity="0.1"></path>
        <path
          d="M25.5 15.5h5v5h-5zM.5 20.5h5v5h-5z"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <path d="M6 21h4v4H6z" fill="#fff" fill-opacity="0.06"></path>
        <path
          d="M5.5 20.5h5v5h-5zM10.5 20.5h5v5h-5zM15.5 20.5h5v5h-5z"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <path d="M21 21h4v4h-4z" fill="#fff" fill-opacity="0.06"></path>
        <path
          d="M20.5 20.5h5v5h-5zM25.5 20.5h5v5h-5zM.5 25.5h5v5h-5zM5.5 25.5h5v5h-5z"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
        <path d="M11 26h4v4h-4z" fill="#fff" fill-opacity="0.1"></path>
        <path
          d="M10.5 25.5h5v5h-5zM15.5 25.5h5v5h-5zM20.5 25.5h5v5h-5zM25.5 25.5h5v5h-5z"
          stroke="#fff"
          stroke-opacity="0.07"
        ></path>
      </g>
    </g>
    <rect
      height="31"
      rx="7.5"
      stroke="url(#h)"
      width="31"
      x="0.5"
      y="0.5"
    ></rect>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="b"
        x1="16"
        x2="16"
        y1="0"
        y2="32"
      >
        <stop stop-color="#fff"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="c"
        x1="16"
        x2="16"
        y1="0"
        y2="32"
      >
        <stop stop-color="#fff" stop-opacity="0.6"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0.3"></stop>
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="h"
        x1="16"
        x2="16"
        y1="0"
        y2="32"
      >
        <stop stop-color="#fff" stop-opacity="0.6"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0.3"></stop>
      </linearGradient>
      <filter
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
        height="54"
        id="d"
        width="54"
        x="-11"
        y="-11"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_793_205"
          stdDeviation="10"
        ></feGaussianBlur>
      </filter>
      <filter
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
        height="32"
        id="e"
        width="32"
        x="0"
        y="0"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_793_205"
          stdDeviation="5"
        ></feGaussianBlur>
      </filter>
      <radialGradient
        cx="0"
        cy="0"
        gradientTransform="rotate(90 0 16.182) scale(12.3182)"
        gradientUnits="userSpaceOnUse"
        id="f"
        r="1"
      >
        <stop stop-color="#fff"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
      </radialGradient>
      <clipPath id="a">
        <rect fill="#fff" height="32" rx="8" width="32"></rect>
      </clipPath>
    </defs>
  </svg>
);
