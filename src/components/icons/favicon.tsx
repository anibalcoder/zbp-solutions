interface FavIconProps {
  width?: number;
  height?: number;
}

export const FavIcon = ({ width = 80, height = 80 }: FavIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
    >
      <rect width="40" height="40" fill="#0d59f2" rx="8" />

      <path
        fill="#fff"
        d="M19 27.425v-6.85L13 17.1v6.85zm2 0 6-3.475V17.1l-6 3.475zm-1-8.575 5.925-3.425L20 12l-5.925 3.425zm-8 6.85a1.95 1.95 0 0 1-1-1.725v-7.95a1.95 1.95 0 0 1 1-1.725l7-4.025Q19.475 10 20 10t1 .275l7 4.025q.476.275.737.725.263.45.263 1v7.95a1.95 1.95 0 0 1-1 1.725l-7 4.025Q20.525 30 20 30t-1-.275z"
      />
    </svg>
  );
};
