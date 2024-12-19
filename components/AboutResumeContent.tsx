"use client";
import { motion } from "motion/react";
import { TabsContent } from "./ui/tabs";
import { resumeData } from "@/config/constants";
import { Badge } from "./ui/badge";
interface AboutResumeContentProps {
  value: string;
}
function AboutResumeContent({ value }: AboutResumeContentProps) {
  return (
    <TabsContent value={value}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="resume-tab-item-title"
      >
        {resumeData.tabContentData.about.title.en}
      </motion.h2>
      <div className="space-y-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="resume-tab-item-wrapper"
        >
          <p className="text-white/90 mb-6 text-lg">
            {resumeData.tabContentData.about.bio.en}
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.tabContentData.about.interests.en.map(
                  (interest, index) => (
                    <Badge key={index} variant="secondary" className="mb-2">
                      {interest}
                    </Badge>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.tabContentData.about.languages.en.map(
                  (interest, index) => (
                    <Badge key={index} variant="secondary" className="mb-2">
                      {interest}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </TabsContent>
  );
}

export default AboutResumeContent;
