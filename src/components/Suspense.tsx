import { ReactNode } from "react";

// Note: could have also used Suspense from React (https://react.dev/reference/react/Suspense)
// but I don't like that errors will show the the suspense fallback
// and I don't want to do a class component for error boundary.

interface Props {
  fallback: ReactNode;
  isLoading: boolean;
  children: ReactNode;
}

function Suspense({
  fallback,
  isLoading,
  children,
}: Props) {
  return isLoading ? fallback : children;
}

export default Suspense;
