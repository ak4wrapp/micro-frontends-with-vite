import React, { Suspense } from "react";

const RemoteHeader = React.lazy(() => import("remote_app/Header"));
const RemoteButton = React.lazy(() => import("remote_app/Button"));

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

export const RemoteComponentWrapper: React.FC = () => {
  const [buttonClickCount, setButtonClickCount] = React.useState(0);
  return (
    <div className="p-4">
      <h4>Button in Remote Application is clicked {buttonClickCount} times</h4>
      <Suspense fallback={<LoadingSpinner />}>
        <RemoteHeader />
      </Suspense>

      <div className="mt-4">
        <Suspense fallback={<LoadingSpinner />}>
          <RemoteButton
            text="Click Me"
            onClick={() => setButtonClickCount(buttonClickCount + 1)}
          />
        </Suspense>
      </div>
    </div>
  );
};
