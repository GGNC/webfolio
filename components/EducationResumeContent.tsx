"use client";
import { motion } from "motion/react";
import { TabsContent } from "./ui/tabs";
import { resumeData } from "@/config/constants";
import { Calendar } from "lucide-react";
import { Badge } from "./ui/badge";
interface EducationResumeContentProps {
  value: string;
}
function EducationResumeContent({ value }: EducationResumeContentProps) {
  return (
    <TabsContent value={value}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="resume-tab-item-title"
      >
        {resumeData.tabContentData.education.title.en}
      </motion.h2>
      <div className="space-y-6 w-full">
        {resumeData.tabContentData.education.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="resume-tab-item-wrapper"
          >
            <div className="resume-tab-item-content-wrapper">
              <div>
                <h3 className="text-lg font-semibold">{item.degree.en}</h3>
                <p className="text-muted-foreground">{item.institution.en}</p>
              </div>
              <div className="flex items-center text-muted-foreground text-xs lg:text-base">
                <Calendar className="w-4 h-4 mr-2" />
                {item.period}
              </div>
            </div>
            <p className="mb-4">{item.description.en}</p>
            <div className="flex flex-wrap gap-2">
              {item.achiments.map((achiment, index) => (
                <Badge key={index} variant="secondary" className="mb-2">
                  {achiment}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </TabsContent>
  );
}

export default EducationResumeContent;
