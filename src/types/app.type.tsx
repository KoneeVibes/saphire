import React from "react";
import { BoxProps, StackProps } from "@mui/material";
import { MotionProps } from "framer-motion";

export type HeaderType = {
    headerText: React.ReactNode,
    headerPhoto?: string | undefined,
    carddisplayvalue?: string,
    headerCarousel?: any
}

export type MotionBoxType = {
    children?: React.ReactNode,
    carddisplayvalue?: string,
} & BoxProps & Omit<MotionProps, keyof BoxProps>

export type MotionStackType = {
    children: React.ReactNode
} & StackProps & Omit<MotionProps, keyof BoxProps>

export type BgImageBoxType = {
    bg: string,
    borderRadius: number,
    minHeight: number,
} & MotionBoxType

export type MarqueeBoxType = {
    content: React.ReactNode
    pauseOnHover?: boolean
    pauseOnClick?: boolean
    bg?: string
    border?: string
    padding?: string
}

export type OverviewBodyType = {
    details: {
        title: {
            main: string;
            number: string;
            subText: string;
        };
        body: {
            number: string;
            subtitle: string;
            details: string;
        }[];
        img: React.ReactNode | string;
    }[] | undefined
}

export type GalleryPropsType = {
    gap: string;
    rows: React.ReactNode[]
}