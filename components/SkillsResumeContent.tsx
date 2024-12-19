"use client";
import { motion } from "motion/react";
import { TabsContent } from "./ui/tabs";
import { resumeData } from "@/config/constants";
import { Badge } from "./ui/badge";
interface SkillsResumeContentProps {
  value: string;
}
function SkillsResumeContent({ value }: SkillsResumeContentProps) {
  return (
    <TabsContent value={value}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="resume-tab-item-title"
      >
        {resumeData.tabContentData.skills.title.en}
      </motion.h2>
      <div className="space-y-6 w-full">
        {resumeData.tabContentData.skills.categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="resume-tab-item-wrapper"
          >
            <div className="resume-tab-item-content-wrapper">
              <div>
                <h3 className="text-lg font-semibold">{item.name.en}</h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-2">{item.description.en}</p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="mb-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </TabsContent>
  );
}

export default SkillsResumeContent;
