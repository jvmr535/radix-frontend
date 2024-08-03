type NavBarProps = {
  children?: React.ReactNode;
};

type NavLinkProps = {
  route: {
    label: string;
    pathname: string;
  };
};

export type { NavBarProps, NavLinkProps };
