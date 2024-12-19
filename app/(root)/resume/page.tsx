import AboutResumeContent from "@/components/AboutResumeContent";
import EducationResumeContent from "@/components/EducationResumeContent";
import ExperienceResumeContent from "@/components/ExperienceResumeContent";
import PageLayout from "@/components/PageLayout";
import SkillsResumeContent from "@/components/SkillsResumeContent";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { resumeData } from "@/config/constants";

function ResumePage() {
  return (
    <div className="resume">
      <PageLayout className="!mx-0 !p-0">
        <Tabs defaultValue="experience" className="resume-tabs">
          <TabsList className="resume-tabslist">
            {resumeData.tabMenuData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="resume-tab-item"
              >
                <div className="resume-tab-item-content">
                  <tab.icon className="resume-tab-item-icon" />
                  {tab.title.en}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 min-h-[400px]">
            <ExperienceResumeContent value="experience" />
            <EducationResumeContent value="education" />
            <SkillsResumeContent value="skills" />
            <AboutResumeContent value="about" />
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
}

export default ResumePage;
