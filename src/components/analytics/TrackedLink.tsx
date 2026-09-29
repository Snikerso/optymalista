"use client";

import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";
import Link from "next/link";
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";

type TrackedLinkProps = Omit<ComponentProps<typeof Link>, "onClick"> & {
  children: ReactNode;
  eventName: AnalyticsEventName;
  eventParams?: Record<string, string | number | boolean | undefined>;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const TrackedLink = ({
  children,
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) => (
  <Link
    {...props}
    onClick={(event) => {
      trackEvent(eventName, eventParams);
      onClick?.(event);
    }}
  >
    {children}
  </Link>
);

type TrackedAnchorProps = ComponentProps<"a"> & {
  eventName: AnalyticsEventName;
  eventParams?: Record<string, string | number | boolean | undefined>;
};

export const TrackedAnchor = ({
  children,
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedAnchorProps) => (
  <a
    {...props}
    onClick={(event) => {
      trackEvent(eventName, eventParams);
      onClick?.(event);
    }}
  >
    {children}
  </a>
);
