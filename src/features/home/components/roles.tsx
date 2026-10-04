"use client";

import type { Variants } from "framer-motion";
import { useState } from "react";
import { MotionDiv, MotionSection, MuImage } from "@/components/layouts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rolesContent, rolesTitle } from "../data/home.data";
import type { Role, RoleItem } from "../types/home.types";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Roles() {
  const [activeRole, setActiveRole] = useState<string>("partner");

  return (
    <MotionSection
      className="py-[30px] px-5 max-w-[1200px] mx-auto"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MotionDiv className="text-center mb-10" variants={fadeInUp}>
        <h2>
          <span className="text-mulearn">Roles</span> in μLearn Network
        </h2>
        <p className="font-medium text-[1.2rem] text-mulearn-gray-600 mt-2.5">
          A brief overview of the diverse roles that power our network.
        </p>
      </MotionDiv>

      <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
        <div className="flex flex-col w-full mb-6 items-center justify-center sm:hidden">
          <Select value={activeRole} onValueChange={(v) => setActiveRole(v)}>
            <SelectTrigger
              className="w-[200px] border-mulearn shadow-[0_4px_16px_rgba(60,130,246,0.18)] text-mulearn"
              aria-label="Select a role"
            >
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              {rolesTitle.map((role: Role) => (
                <SelectItem key={role.id} value={role.id}>
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <TabsList className="hidden sm:flex justify-center mb-10 h-auto bg-transparent">
          {rolesTitle.map((role: Role) => (
            <TabsTrigger
              key={role.id}
              value={role.id}
              className="text-base px-4 py-2.5 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-mulearn data-[state=active]:font-bold data-[state=active]:text-mulearn rounded-none"
            >
              {role.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {rolesTitle.map((role: Role) => (
          <TabsContent key={role.id} value={role.id} className="mt-0">
            <MotionDiv
              className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 px-5"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {rolesContent[role.id].map((item: RoleItem) => (
                <MotionDiv key={item.id} variants={fadeInUp}>
                  <Card variant="hoverable" className="h-full border-mulearn/10">
                    <CardHeader className="p-0">
                      <MuImage
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={200}
                        className="w-full min-h-[220px] object-cover rounded-t-lg"
                        loading="lazy"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 250px"
                      />
                    </CardHeader>
                    <CardContent className="p-5 text-center">
                      <CardTitle className="text-[1.1rem] font-bold text-mulearn-blackish mb-2">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-[0.85rem] font-normal text-mulearn-gray-600">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>
          </TabsContent>
        ))}
      </Tabs>
    </MotionSection>
  );
}
