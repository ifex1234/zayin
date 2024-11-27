"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputCustom() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-07">Input with gray background</Label>
      <Input
        id="input-07"
        className="border-transparent bg-muted shadow-none"
        placeholder="Email"
        type="email"
      />
    </div>
  );
}

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
}

// Dependencies: pnpm install lucide-react react-aria-components

import { getLocalTimeZone, today } from "@internationalized/date";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover,
} from "react-aria-components";

export function Input2() {
  const now = today(getLocalTimeZone());

  return (
    <DatePicker className="space-y-2">
      <Label className="text-sm font-medium text-foreground">Date picker</Label>
      <div className="flex">
        <Group className="inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 pe-9 text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20">
          <DateInput>
            {(segment) => (
              <DateSegment
                segment={segment}
                className="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 data-[disabled]:cursor-not-allowed data-[focused]:bg-accent data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[focused]:data-[placeholder]:text-foreground data-[focused]:text-foreground data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive data-[placeholder]:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 data-[disabled]:opacity-50"
              />
            )}
          </DateInput>
        </Group>
        <Button className="z-10 -me-px -ms-9 flex w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:outline-none data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70">
          <CalendarIcon size={16} strokeWidth={2} />
        </Button>
      </div>
      <Popover
        className="z-50 rounded-lg border border-input bg-background text-popover-foreground shadow-lg shadow-black/5 outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2"
        offset={4}
      >
        <Dialog className="max-h-[inherit] overflow-auto p-2">
          <Calendar className="w-fit">
            <header className="flex w-full items-center gap-1 pb-1">
              <Button
                slot="previous"
                className="flex size-9 items-center justify-center rounded-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:bg-accent hover:text-foreground data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
              >
                <ChevronLeft size={16} strokeWidth={2} />
              </Button>
              <Heading className="grow text-center text-sm font-medium" />
              <Button
                slot="next"
                className="flex size-9 items-center justify-center rounded-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:bg-accent hover:text-foreground data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
              >
                <ChevronRight size={16} strokeWidth={2} />
              </Button>
            </header>
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => (
                  <CalendarHeaderCell className="size-9 rounded-lg p-0 text-xs font-medium text-muted-foreground/80">
                    {day}
                  </CalendarHeaderCell>
                )}
              </CalendarGridHeader>
              <CalendarGridBody className="[&_td]:px-0">
                {(date) => (
                  <CalendarCell
                    date={date}
                    className={cn(
                      "relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg border border-transparent p-0 text-sm font-normal text-foreground outline-offset-2 transition-colors data-[disabled]:pointer-events-none data-[unavailable]:pointer-events-none data-[focus-visible]:z-10 data-[hovered]:bg-accent data-[selected]:bg-primary data-[hovered]:text-foreground data-[selected]:text-primary-foreground data-[unavailable]:line-through data-[disabled]:opacity-30 data-[unavailable]:opacity-30 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70 data-[invalid]:data-[selected]:[&:not([data-hover])]:bg-destructive data-[invalid]:data-[selected]:[&:not([data-hover])]:text-destructive-foreground",
                      date.compare(now) === 0 &&
                        "after:pointer-events-none after:absolute after:bottom-1 after:start-1/2 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-full after:bg-primary data-[selected]:after:bg-background"
                    )}
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
      <p
        className="mt-2 text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/DatePicker.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </DatePicker>
  );
}

// Dependencies: pnpm install react-phone-number-input lucide-react

import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import React, { forwardRef, useState } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

export function Input1() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-2" dir="ltr">
      <Label htmlFor="input-46">Phone number input</Label>
      <RPNInput.default
        className="flex rounded-lg shadow-sm shadow-black/5"
        international
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={PhoneInput}
        id="input-46"
        placeholder="Enter phone number"
        value={value}
        onChange={(newValue) => setValue(newValue ?? "")}
      />
      <p
        className="mt-2 text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://gitlab.com/catamphetamine/react-phone-number-input"
          target="_blank"
          rel="noopener nofollow"
        >
          react-phone-number-input
        </a>
      </p>
    </div>
  );
}

const PhoneInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        className={cn(
          "-ms-px rounded-s-none shadow-none focus-visible:z-10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: { label: string; value: RPNInput.Country | undefined }[];
};

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country);
  };

  return (
    <div className="relative inline-flex items-center self-stretch rounded-s-lg border border-input bg-background py-2 pe-2 ps-3 text-muted-foreground transition-shadow focus-within:z-10 focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-muted-foreground/80">
          <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{" "}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  );
};

export const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <Phone size={16} aria-hidden="true" />
      )}
    </span>
  );
};
