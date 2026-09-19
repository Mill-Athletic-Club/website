export type ClassType = {
  slug: string;
  name: string;
  description: string;
  schedule: string;
};

export const classTypes: ClassType[] = [
  {
    slug: "strength-conditioning",
    name: "Strength & Conditioning",
    description:
      "Barbell strength work paired with conditioning finishers. Our bread and butter, five days a week.",
    schedule: "Mon–Fri: 6am, 9am, 5pm, 7pm",
  },
  {
    slug: "olympic-lifting",
    name: "Olympic Lifting",
    description:
      "Technical coaching in the snatch and clean & jerk, from first pull to competition prep.",
    schedule: "Tue/Thu: 6pm · Sat: 10am",
  },
  {
    slug: "small-group-personal-training",
    name: "Small Group Personal Training",
    description:
      "Coached programming for two to four athletes training toward the same goal.",
    schedule: "By appointment — coordinated with your coach",
  },
  {
    slug: "open-gym",
    name: "Open Gym",
    description:
      "Independent training time with full floor access and a coach on-site for questions.",
    schedule: "Mon–Fri: 5am–9pm · Sat–Sun: 7am–2pm",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  // Placeholder in place of a real Sanity `coverImage` asset — a class of
  // gradient/tone used to render a stand-in cover block until images exist.
  coverTone: "teal" | "blue" | "mixed";
  // Sanity's `body` field is Portable Text (array of blocks). Mocked here as
  // plain paragraphs; swap for a Portable Text renderer once wired to Sanity.
  body: string[];
};

export const mockBlogPosts: BlogPost[] = [
  {
    slug: "how-to-warm-up-before-a-strength-session",
    title: "How to Warm Up Before a Strength Session",
    publishedAt: "2026-08-12",
    excerpt:
      "A rushed warm-up is the fastest way to a mediocre lift and a nagging injury. Here's the five-minute sequence our coaches run every athlete through before barbell work.",
    coverTone: "teal",
    body: [
      "Most lifters treat the warm-up as a formality — a few arm circles, maybe a light set on the bar, then straight into working weight. At The MAC, we treat it as part of the training session, not a preamble to it.",
      "Start with two minutes of low-intensity cardio to raise core temperature: a bike, a row, or brisk step-ups. This isn't about burning calories, it's about getting blood into the tissue you're about to load.",
      "From there, move into dynamic mobility for the joints your lift depends on. For a squat day, that's ankles and hips. For a press day, that's shoulders and thoracic spine. Skip static stretching here — save that for after.",
      "Finish with two to three ramping sets of the actual lift, working up in small jumps to your first working weight. By the time you touch your top set, your nervous system should already know what the movement feels like.",
      "Coaches on the floor are there to check your bar path during these ramp-up sets, not just your working sets — that's often where a form breakdown starts.",
    ],
  },
  {
    slug: "why-we-coach-small-groups-not-classes",
    title: "Why We Coach Small Groups, Not Classes",
    publishedAt: "2026-07-28",
    excerpt:
      "There's a difference between a class that's programmed for the room and coaching that's programmed for you. Here's why every session at The MAC caps at twelve.",
    coverTone: "blue",
    body: [
      "Walk into most big-box gyms and a \"class\" means one instructor, thirty people, and a workout designed to be safe for the lowest common denominator in the room. Nobody gets coached — they get supervised.",
      "We cap every session at twelve athletes for a reason: it's the largest group one coach can actually watch. That means real-time cues on your setup, your bar path, your breathing — not just a headcount and a timer.",
      "It also means the programming can flex. If you're coming back from a tweaked shoulder, your coach can swap a movement on the spot without derailing the session for everyone else.",
      "Small group coaching costs more to run than a class model. We think it's the only version of group training worth doing.",
    ],
  },
  {
    slug: "milton-athletes-first-90-days",
    title: "What to Expect in Your First 90 Days at The MAC",
    publishedAt: "2026-07-05",
    excerpt:
      "New members ask the same handful of questions in week one. Here's an honest look at the on-ramp, the soreness, and when you'll actually start to feel strong.",
    coverTone: "mixed",
    body: [
      "Your first two weeks will probably hurt more than you expect, even if you've trained before. New movement patterns recruit muscle you haven't used in a while — that's normal, and it fades fast.",
      "Weeks three through six are where technique clicks. Your squat depth improves, your deadlift setup stops needing three reminders, and the warm-up sets stop feeling like the whole workout.",
      "By week eight or nine, most athletes report the first real strength jump — not because the program changed, but because the movement finally stopped being the limiting factor.",
      "Ninety days in, we sit down with every member for a quick check-in: what's working, what hurts, and what the next block of programming should prioritize. No sales pitch, just a conversation about your training.",
    ],
  },
];
