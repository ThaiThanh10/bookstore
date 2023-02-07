import Icon from "@ant-design/icons";

export const Plus = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" width="2" height="10" fill="currentColor" />
    <rect
      y="6"
      width="2"
      height="10"
      transform="rotate(-90 0 6)"
      fill="currentColor"
    />
  </svg>
);

export const PlusIcon = (props) => <Icon component={Plus} {...props} />;
