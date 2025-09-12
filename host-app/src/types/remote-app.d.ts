declare module "remote_app/Header" {
  const Header: React.ComponentType;
  export default Header;
}

declare module "remote_app/Button" {
  const Button: React.FC<{
    text: string;
    onClick: () => void;
  }>;
  export default Button;
}
