"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getLocalTimeZone, today } from "@internationalized/date";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import React from "react";
import useMultiform from "@/lib/useMultiform";

export default function EsusuForm() {
  const { currentStepIndex, steps, step, isFirstStep, isLastStep } =
    // eslint-disable-next-line react/jsx-key
    useMultiform([<ApplicantForm />, <GuarantorForm />]);

  return (
    <div className="relative bg-background ">
      <form action="">
        <span className=" absolute top-1 right-1">
          {currentStepIndex + 1}/ {steps.length}
        </span>
        {step}
        <span className="mt-1 flex gap-1 justify-end">
          {" "}
          {!isFirstStep && <button>Back</button>}
          <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
        </span>
      </form>
    </div>
  );
}

function ApplicantForm() {
  const now = today(getLocalTimeZone());
  return (
    <div className="p-3 ">
      <h2 className="text-lg font-semibold text-center">
        ESUSU LOAN APPLICATION
      </h2>
      <form>
        <div className="flex flex-row items-center gap-4 w-full">
          <Label htmlFor="name" className="flex">
            Name <span className="text-destructive"> *</span>:{" "}
          </Label>
          <Input
            className="border-transparent bg-muted shadow-none h-12"
            placeholder="Surname first"
            type="email"
          />
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <DatePicker className="space-y-2 flex items-center gap-4">
            <Label className="text-sm font-medium text-foreground">
              Date of birth <span className="text-destructive">*</span>:
            </Label>

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
          </DatePicker>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">
            Address
            <span className="text-destructive"> *</span>
          </Label>
          <Textarea id="address" placeholder="Address" required />
        </div>

        <div className="space-y-4 w-full">
          <Label htmlFor="nexofkin">
            Next of kin <span className="text-destructive"> *</span>
          </Label>
          <span className="space-y-4">
            <Input id="nexofkin" placeholder="name" required />{" "}
            <Input id="nexofkinphone" placeholder="phone" required />
          </span>
        </div>

        <div>
          <div className="space-y-2 w-full">
            <Label htmlFor="nexofkin">
              Number of dependents <span className="text-destructive"> *</span>
            </Label>
            <span className="space-y-4">
              <Input id="dependents" placeholder="name" required />
            </span>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="nexofkin">
              Years in business<span className="text-destructive"> *</span>
            </Label>
            <span className="space-y-4">
              <Input id="nexofkin" required />
            </span>
          </div>
        </div>

        <div>
          <div className="space-y-2">
            <Label htmlFor="address">
              Business Address
              <span className="text-destructive"> *</span>
            </Label>
            <Textarea id="address" placeholder="Address" required />
          </div>
        </div>

        <div>
          <div className="space-y-2 w-full">
            <Label htmlFor="expenses">
              Average Weekly Expenses{" "}
              <span className="text-destructive"> *</span>
            </Label>
            <span className="space-y-4">
              <Input id="dependents" placeholder="name" required />
            </span>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="nexofkin">
              Average Weekly Income
              <span className="text-destructive"> *</span>
            </Label>
            <span className="space-y-4">
              <Input id="nexofkin" required />
            </span>
          </div>
        </div>

        <div>
          <div className="space-y-2">
            <Label htmlFor="address">
              Purpose of Borrowing
              <span className="text-destructive"> *</span>
            </Label>
            <Textarea id="borrowing" required />
          </div>
        </div>

        <div>
          <div className="space-y-2">
            <Label htmlFor="address">
              Amount Requested
              <span className="text-destructive"> *</span>
            </Label>
            <Input id="borrowing" required />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 py-2">
            <Label htmlFor="picture">Affix passport</Label>
            <Input id="picture" type="file" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 py-2">
            <Label htmlFor="signature">Upload Applicant Signature</Label>
            <Input id="signature" type="file" />
          </div>
        </div>
      </form>
    </div>
  );
}

function GuarantorForm() {
  const now = today(getLocalTimeZone());
  return (
    <div className="p-3 ">
      <h2 className="text-lg font-semibold text-center">
        ESUSU LOAN APPLICATION
      </h2>
      <form>
        <div className="flex flex-row items-center gap-4 w-full">
          <Label htmlFor="name" className="flex">
            Name <span className="text-destructive"> *</span>:{" "}
          </Label>
          <Input
            className="border-transparent bg-muted shadow-none h-12"
            placeholder="Surname first"
            type="email"
          />
        </div>
        <div className="flex flex-row">
          <DatePicker className="space-y-2 flex items-center gap-4">
            <Label className="text-sm font-medium text-foreground">
              Date of birth <span className="text-destructive">*</span>:
            </Label>

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
          </DatePicker>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">
            Address
            <span className="text-destructive"> *</span>
          </Label>
          <Textarea id="address" placeholder="Address" required />
        </div>

        <div className="space-y-4 w-full">
          <Label htmlFor="nexofkin">
            Next of kin <span className="text-destructive"> *</span>
          </Label>
          <span className="space-y-4">
            <Input id="nexofkin" placeholder="name" required />{" "}
            <Input id="nexofkinphone" placeholder="phone" required />
          </span>
        </div>

        <div>
          <div className="space-y-2 w-full">
            <Label htmlFor="nexofkin">
              Number of dependents <span className="text-destructive"> *</span>
            </Label>
            <span className="space-y-4">
              <Input id="dependents" placeholder="name" required />
            </span>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="nexofkin">
              Years in business<span className="text-destructive"> *</span>
            </Label>
            <span className="space-y-4">
              <Input id="nexofkin" required />
            </span>
          </div>
        </div>

        <div>
          <div className="space-y-2">
            <Label htmlFor="address">
              Business Address
              <span className="text-destructive"> *</span>
            </Label>
            <Textarea id="address" placeholder="Address" required />
          </div>
        </div>

        <div>
          <div className="space-y-2 w-full">
            <Label htmlFor="expenses">
              Average Weekly Expenses{" "}
              <span className="text-destructive"> *</span>
            </Label>
            <span className="space-y-4">
              <Input id="dependents" placeholder="name" required />
            </span>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor="nexofkin">
              Average Weekly Income
              <span className="text-destructive"> *</span>
            </Label>
            <span className="space-y-4">
              <Input id="nexofkin" required />
            </span>
          </div>
        </div>

        <div>
          <div className="space-y-2">
            <Label htmlFor="address">
              Purpose of Borrowing
              <span className="text-destructive"> *</span>
            </Label>
            <Textarea id="borrowing" required />
          </div>
        </div>

        <div>
          <div className="space-y-2">
            <Label htmlFor="address">
              Amount Requested
              <span className="text-destructive"> *</span>
            </Label>
            <Input id="borrowing" required />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 py-2">
            <Label htmlFor="picture">Affix passport</Label>
            <Input id="picture" type="file" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 py-2">
            <Label htmlFor="signature">Upload Applicant Signature</Label>
            <Input id="signature" type="file" />
          </div>
        </div>
      </form>
    </div>
  );
}

// type WrapperProps = {
//   title: string;
//   child: React.ReactNode;
// };
// export default function FormWrapper({ title, child }: WrapperProps) {
//   return (
//     <>
//       <h2 className="center mb-2">{title}</h2>

//       <div>{child}</div>
//     </>
//   );
// }
