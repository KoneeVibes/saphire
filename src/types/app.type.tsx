import React from "react";
import { BoxProps, StackProps } from "@mui/material";
import { MotionProps } from "framer-motion";

export type HeaderType = {
    headerText: React.ReactNode,
    headerPhoto: string,
    cardTitle: React.ReactNode,
    cardContent: React.ReactNode,
    cardActionButton: React.ReactNode
}

export type MotionBoxType = {
    children: React.ReactNode
} & BoxProps & Omit<MotionProps, keyof BoxProps>

export type MotionStackType = {
    children: React.ReactNode
} & StackProps & Omit<MotionProps, keyof BoxProps>