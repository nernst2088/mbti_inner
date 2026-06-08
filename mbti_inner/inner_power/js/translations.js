const translations = {
    zh: {
        navTitle: "问卷评估",
        title: "自我成长与内在力量评估",
        subtitle: "本问卷旨在帮助您觉察自我独立性与心理成熟度，共12题。请根据近半年来的真实感受作答。",
        scaleTitle: "计分说明",
        scaleDesc: "请根据自身情况，选择符合程度的分值：",
        s1: "完全不符合", s2: "较不符合", s3: "不确定/偶尔", s4: "较符合", s5: "完全符合",
        progress: "{current} / {total}",
        submitBtn: "打开报告",
        prevBtn: "上一题",
        nextBtn: "下一题",
        alertIncomplete: "您还有 {count} 题未作答，请温柔地完成与自己的对话。",
        resultTitle: "你的内在力量画像",
        resetBtn: "重新评估",
        scoreLabel: "/ 60",
        dimensionTitle: "内在力量维度剖析",
        dimExpectation: "期待与现实",
        dimExpectationSub: "自我中心倾向",
        dimIndependence: "独立与依托",
        dimIndependenceSub: "依赖倾向",
        dimEmotion: "情绪流动性",
        dimEmotionSub: "情绪调节力",
        dimResponsibility: "责任内归因",
        dimResponsibilitySub: "担当力",
        dimMaxScore: "/ 15",
        dimNote: "分数越高，代表该维度的成长空间越大",
        levels: [
            {
                range: [12, 24],
                text: "稳健独立型",
                sub: "内在力量充沛",
                bg: "rgba(52, 199, 89, 0.15)",
                color: "#34C759",
                advice: [
                    { title: "状态解读", text: "您拥有高度的心理成熟度与内在力量。您能够清晰地认知自我与他人的边界，情绪稳定，能够为自己的生活负责。您不仅能够照顾好自己，也能成为身边人安定的力量。" }
                ],
                quotes: ["君子求诸己，小人求诸人。 —— 《论语》", "您已经深谙向内寻求力量的智慧。继续保持这份觉察，在纷繁世事中守护内心的安宁。"]
            },
            {
                range: [25, 36],
                text: "探索成长型",
                sub: "偶尔回避挑战",
                bg: "rgba(0, 122, 255, 0.15)",
                color: "#007AFF",
                advice: [
                    { title: "状态解读", text: "总体上您是个负责任的成年人，但在疲惫、压力过大或面对特定亲密关系时，您可能会暂时退回到安全的壳里，希望有人能替您分担或做主。这是人之常情，无需苛责自己。" },
                    { title: "破茧建议", text: "拥抱脆弱：当想逃避时，告诉自己\u201c我只是累了，需要休息\u201d，而不是\u201c我做不到\u201d。\n\n微小决定法：在想依赖他人的瞬间，尝试自己做一个小决定。哪怕只是决定今晚吃什么，也是在为内在肌肉增加力量。" }
                ],
                quotes: ["行有不得，反求诸己。 —— 《孟子》", "当外界不如意时，正是向内看、照见自己力量的最好时机。"]
            },
            {
                range: [37, 48],
                text: "寻求支持型",
                sub: "渴望外部依托",
                bg: "rgba(255, 149, 0, 0.15)",
                color: "#FF9500",
                advice: [
                    { title: "状态解读", text: "您在情绪调节、自我负责和独立性方面似乎遇到了一些瓶颈。您可能非常渴望被关注、被照顾，当外界未能满足期待时，容易感到受伤或委屈。" },
                    { title: "破茧建议", text: "情绪缓冲期：当情绪上涌时，试着给自己5分钟的\u201c隔离期\u201d。\n\n看见对方的边界：当别人拒绝您时，试着在心里默念：\u201c他们拒绝的是这个请求，而不是我这个人。\u201d\n\n拿回人生方向盘：从今天起，停止等待别人来安排。" }
                ],
                quotes: ["知人者智，自知者明。胜人者有力，自胜者强。 —— 《道德经》", "真正的力量不来自于控制外界，而来自于掌控自己。"]
            },
            {
                range: [49, 60],
                text: "渴望依托型",
                sub: "内在力量待唤醒",
                bg: "rgba(255, 59, 48, 0.15)",
                color: "#FF3B30",
                advice: [
                    { title: "状态解读", text: "目前，您可能正经历着内心的挣扎。您可能非常期望世界能如您所愿运转，极度渴望他人的保护与托底。请温柔地抱抱自己——这说明您内心的力量正在沉睡，但并非不存在。" },
                    { title: "破茧建议", text: "放下防御，接纳现状：承认\u201c我目前还无法很好地独立应对\u201d，这是最勇敢的第一步。\n\n切断\u201c被供养\u201d的脐带：试着独自完成一件有挑战的小事，自己承担结果。\n\n寻求专业陪伴：如果独自面对太困难，心理咨询师可以作为一个安全的拐杖。" }
                ],
                quotes: ["不怨天，不尤人，下学而上达。 —— 《论语》", "向内寻求，自性生光。 —— 荣格", "痛苦往往是觉醒的契机。当您不再期待外界来拯救，您自身那股不可阻挡的生命力就会涌现。"]
            }
        ],
        questions: [
            "遇到计划外的事情（如堵车、安排突变）时，我容易感到强烈的挫败感，有时会觉得事情似乎总在与我作对。",
            "我有时会希望自己的需求能被优先关注，当别人未能及时提供帮助时，我容易感到失落或认为对方不够体贴。",
            "当我的请求被拒绝时，我很难立刻体谅对方的处境，第一反应往往是自己的感受受了伤。",
            "面对重要的选择或困难时，我更习惯先征求他人的意见或寻求帮助，而非独自做出决定。",
            "如果缺少亲密之人的陪伴与指导，我会感到不安和茫然，觉得自己很难独自应对生活。",
            "对于一些日常事务（如理财、复杂家务、处理纠纷），我常感到力不从心，更倾向于交由他人处理。",
            "当我感到极度委屈时，有时难以控制情绪，可能会用激烈的言辞、沉默对峙等方式，希望对方能理解我的痛苦。",
            "我对人的评价有时容易受当下情绪影响，若对方让我失望，我可能会暂时忽略他所有的好。",
            "我的情绪比较敏感，有时别人的一句话或一个小细节就能引发我较大的情绪波动，且需要较长时间才能平复。",
            "当事情发展不顺时，我更容易看到环境或他人的因素，而较少第一时间反思自身的不足。",
            "我认为在相对弱势的处境下，理应得到更多的包容与照顾，外界不应给予太严苛的要求。",
            "出于关心，我常常觉得亲近的人的事就是我的事，如果不过问或插手，我会觉得彼此不够亲密。"
        ]
    },
    tw: {
        navTitle: "問卷評估",
        title: "自我成長與內在力量評估",
        subtitle: "本問卷旨在幫助您覺察自我獨立性與心理成熟度，共12題。請根據近半年來的真實感受作答。",
        scaleTitle: "計分說明",
        scaleDesc: "請根據自身情況，選擇符合程度的分值：",
        s1: "完全不符合", s2: "較不符合", s3: "不確定/偶爾", s4: "較符合", s5: "完全符合",
        progress: "{current} / {total}",
        submitBtn: "開啟報告",
        prevBtn: "上一題",
        nextBtn: "下一題",
        alertIncomplete: "您還有 {count} 題未作答，請溫柔地完成與自己的對話。",
        resultTitle: "你的內在力量畫像",
        resetBtn: "重新評估",
        scoreLabel: "/ 60",
        dimensionTitle: "內在力量維度剖析",
        dimExpectation: "期待與現實",
        dimExpectationSub: "自我中心傾向",
        dimIndependence: "獨立與依託",
        dimIndependenceSub: "依賴傾向",
        dimEmotion: "情緒流動性",
        dimEmotionSub: "情緒調節力",
        dimResponsibility: "責任內歸因",
        dimResponsibilitySub: "擔當力",
        dimMaxScore: "/ 15",
        dimNote: "分數越高，代表該維度的成長空間越大",
        levels: [
            {
                range: [12, 24],
                text: "穩健獨立型",
                sub: "內在力量充沛",
                bg: "rgba(52, 199, 89, 0.15)",
                color: "#34C759",
                advice: [
                    { title: "狀態解讀", text: "您擁有高度的心理成熟度與內在力量。您能夠清晰地認知自我與他人的邊界，情緒穩定，能夠為自己的生活負責。您不僅能照顧好自己，也能成為身邊人安定的力量。" }
                ],
                quotes: ["君子求諸己，小人求諸人。 —— 《論語》", "您已經深諳向內尋求力量的智慧。繼續保持這份覺察，在紛繁世事中守護內心的安寧。"]
            },
            {
                range: [25, 36],
                text: "探索成長型",
                sub: "偶爾迴避挑戰",
                bg: "rgba(0, 122, 255, 0.15)",
                color: "#007AFF",
                advice: [
                    { title: "狀態解讀", text: "總體上您是個負責任的成年人，但在疲憊、壓力過大或面對特定親密關係時，您可能會暫時退回到安全的殼裡，希望有人能替您分擔或做主。這是人之常情，無需苛責自己。" },
                    { title: "破繭建議", text: "擁抱脆弱：當想逃避時，告訴自己\u201c我只是累了，需要休息\u201d，而不是\u201c我做不到\u201d。\n\n微小決定法：在想依賴他人的瞬間，嘗試自己做一個小決定。哪怕只是決定今晚吃什麼，也是在為內在肌肉增加力量。" }
                ],
                quotes: ["行有不得，反求諸己。 —— 《孟子》", "當外界不如意時，正是向內看、照見自己力量的最好時機。"]
            },
            {
                range: [37, 48],
                text: "尋求支持型",
                sub: "渴望外部依託",
                bg: "rgba(255, 149, 0, 0.15)",
                color: "#FF9500",
                advice: [
                    { title: "狀態解讀", text: "您在情緒調節、自我負責和獨立性方面似乎遇到了一些瓶頸。您可能非常渴望被關注、被照顧，當外界未能滿足期待時，容易感到受傷或委屈。" },
                    { title: "破繭建議", text: "情緒緩衝期：當情緒上湧時，試著給自己5分鐘的\u201c隔離期\u201d。\n\n看見對方的邊界：當別人拒絕您時，試著在心裡默念：\u201c他們拒絕的是這個請求，而不是我這個人。\u201d\n\n拿回人生方向盤：從今天起，停止等待別人來安排。" }
                ],
                quotes: ["知人者智，自知者明。勝人者有力，自勝者強。 —— 《道德經》", "真正的力量不來自於控制外界，而來自於掌控自己。"]
            },
            {
                range: [49, 60],
                text: "渴望依託型",
                sub: "內在力量待喚醒",
                bg: "rgba(255, 59, 48, 0.15)",
                color: "#FF3B30",
                advice: [
                    { title: "狀態解讀", text: "目前，您可能正經歷著內心的掙扎。您可能非常期望世界能如您所願運轉，極度渴望他人的保護與托底。請溫柔地抱抱自己——這說明您內心的力量正在沉睡，但並非不存在。" },
                    { title: "破繭建議", text: "放下防禦，接納現狀：承認\u201c我目前還無法很好地獨立應對\u201d，這是最勇敢的第一步。\n\n切斷\u201c被供養\u201d的臍帶：試著獨自完成一件有挑戰的小事，自己承擔結果。\n\n尋求專業陪伴：如果獨自面對太困難，心理諮詢師可以作為一個安全的拐杖。" }
                ],
                quotes: ["不怨天，不尤人，下學而上達。 —— 《論語》", "向內尋求，自性生光。 —— 榮格", "痛苦往往是覺醒的契機。當您不再期待外界來拯救，您自身那股不可阻擋的生命力就會湧現。"]
            }
        ],
        questions: [
            "遇到計劃外的事情（如堵車、安排突變）時，我容易感到強烈的挫敗感，有時會覺得事情似乎總在與我作對。",
            "我有時會希望自己的需求能被優先關注，當別人未能及時提供幫助時，我容易感到失落或認為對方不夠體貼。",
            "當我的請求被拒絕時，我很難立刻體諒對方的處境，第一反應往往是自己的感受受了傷。",
            "面對重要的選擇或困難時，我更習慣先徵求他人的意見或尋求幫助，而非獨自做出決定。",
            "如果缺少親密之人的陪伴與指導，我會感到不安和茫然，覺得自己很難獨自應對生活。",
            "對於一些日常事務（如理財、複雜家務、處理糾紛），我常感到力不從心，更傾向於交由他人處理。",
            "當我感到極度委屈時，有時難以控制情緒，可能會用激烈的言辭、沉默對峙等方式，希望對方能理解我的痛苦。",
            "我對人的評價有時容易受當下情緒影響，若對方讓我失望，我可能會暫時忽略他所有的好。",
            "我的情緒比較敏感，有時別人的一句話或一個小細節就能引發我較大的情緒波動，且需要較長時間才能平復。",
            "當事情發展不順時，我更容易看到環境或他人的因素，而較少第一時間反思自身的不足。",
            "我認為在相對弱勢的處境下，理應得到更多的包容與照顧，外界不應給予太嚴苛的要求。",
            "出於關心，我常常覺得親近的人的事就是我的事，如果不過問或插手，我會覺得彼此不夠親密。"
        ]
    },
    en: {
        navTitle: "Assessment",
        title: "Self-Growth &\nInner Strength",
        subtitle: "This questionnaire helps you explore your self-independence and psychological maturity. 12 questions. Answer based on your feelings over the past six months.",
        scaleTitle: "Scoring Guide",
        scaleDesc: "Select the score that best matches your situation:",
        s1: "Strongly Disagree", s2: "Disagree", s3: "Unsure", s4: "Agree", s5: "Strongly Agree",
        progress: "{current} of {total}",
        submitBtn: "Open Report",
        prevBtn: "Previous",
        nextBtn: "Next",
        alertIncomplete: "You have {count} unanswered question(s). Please complete your self-reflection.",
        resultTitle: "Your Inner Strength Profile",
        resetBtn: "Retake Assessment",
        scoreLabel: "/ 60",
        dimensionTitle: "Inner Strength Dimensions",
        dimExpectation: "Expectation vs. Reality",
        dimExpectationSub: "Egocentric Tendency",
        dimIndependence: "Independence vs. Reliance",
        dimIndependenceSub: "Dependent Tendency",
        dimEmotion: "Emotional Flow",
        dimEmotionSub: "Emotional Regulation",
        dimResponsibility: "Internal Attribution",
        dimResponsibilitySub: "Responsibility",
        dimMaxScore: "/ 15",
        dimNote: "Higher scores indicate greater room for growth",
        levels: [
            {
                range: [12, 24],
                text: "Robustly Independent",
                sub: "Strong Inner Strength",
                bg: "rgba(52, 199, 89, 0.15)",
                color: "#34C759",
                advice: [
                    { title: "State Interpretation", text: "You demonstrate a high degree of psychological maturity and inner strength. You can clearly recognize the boundaries between yourself and others, maintain emotional stability, and take responsibility for your life." }
                ],
                quotes: ["The superior man seeks within himself; the inferior man seeks from others. \u2014 The Analects", "You have deeply understood the wisdom of seeking strength from within. Continue to maintain this awareness."]
            },
            {
                range: [25, 36],
                text: "Exploring Growth",
                sub: "Occasionally Avoiding Challenges",
                bg: "rgba(0, 122, 255, 0.15)",
                color: "#007AFF",
                advice: [
                    { title: "State Interpretation", text: "Overall, you are a responsible adult. However, when exhausted or under stress, you may temporarily retreat into a safe shell, hoping someone will share the burden. This is human nature." },
                    { title: "Breakthrough Suggestions", text: "Embrace vulnerability: When you want to escape, tell yourself \u201cI'm just tired and need rest,\u201d not \u201cI can't do it.\u201d\n\nMicro-decision method: In the moment you want to rely on others, try making a small decision yourself." }
                ],
                quotes: ["If you do not succeed, turn inward and examine yourself. \u2014 Mencius", "When the external world is unsatisfactory, it's the best time to look inward."]
            },
            {
                range: [37, 48],
                text: "Seeking Support",
                sub: "Craving External Anchoring",
                bg: "rgba(255, 149, 0, 0.15)",
                color: "#FF9500",
                advice: [
                    { title: "State Interpretation", text: "You seem to encounter some bottlenecks in emotional regulation, self-responsibility, and independence. You may strongly desire attention and care, and feel hurt when expectations are not met." },
                    { title: "Breakthrough Suggestions", text: "Emotional buffer: When emotions surge, try giving yourself a 5-minute pause.\n\nSee others' boundaries: When someone rejects you, they are rejecting the request, not you.\n\nTake back the steering wheel: Stop waiting for others to arrange things for you." }
                ],
                quotes: ["He who knows others is wise; he who knows himself is enlightened. \u2014 Tao Te Ching", "True strength does not come from controlling the external world, but from mastering yourself."]
            },
            {
                range: [49, 60],
                text: "Longing for Support",
                sub: "Inner Strength Awaiting Awakening",
                bg: "rgba(255, 59, 48, 0.15)",
                color: "#FF3B30",
                advice: [
                    { title: "State Interpretation", text: "Currently, you may be experiencing inner struggles. You may strongly expect the world to work as you wish, craving protection from others. Please gently embrace yourself \u2014 your inner strength is sleeping, not gone." },
                    { title: "Breakthrough Suggestions", text: "Let down defenses: Admitting \u201cI cannot yet handle things independently\u201d is the bravest first step.\n\nCut the umbilical cord: Try completing a challenging task on your own.\n\nSeek professional help: A counselor can serve as a safe crutch during this transition." }
                ],
                quotes: ["Do not blame heaven, do not accuse others. \u2014 The Analects", "Seek within, and your own nature will shine. \u2014 Carl Jung", "Pain is often the catalyst for awakening."]
            }
        ],
        questions: [
            "When unexpected things happen (e.g., traffic jams, schedule changes), I easily feel frustrated and sometimes feel things work against me.",
            "I sometimes hope my needs will be prioritized, and when others fail to provide timely help, I easily feel disappointed.",
            "When my requests are rejected, I find it hard to immediately empathize with the other person, and my first reaction is often hurt feelings.",
            "When facing important choices or difficulties, I prefer to seek others' opinions first rather than deciding on my own.",
            "Without the companionship and guidance of close ones, I feel uneasy and find it hard to cope with life alone.",
            "For some daily tasks (e.g., finances, complex chores, disputes), I often feel overwhelmed and prefer to leave them to others.",
            "When I feel extremely aggrieved, I sometimes struggle to control my emotions, using harsh words or silence to make others understand my pain.",
            "My evaluation of people is sometimes influenced by current emotions. If someone disappoints me, I may temporarily ignore their good qualities.",
            "I am emotionally sensitive. A single sentence or detail can trigger significant emotional fluctuations that take time to calm down.",
            "When things go wrong, I tend to see environmental or others' factors more easily, and less often reflect on my own shortcomings first.",
            "I believe that in a disadvantaged situation, one deserves more tolerance and care, and the world should not be too harsh.",
            "Out of care, I often feel close people's affairs are mine. If I don't get involved, I feel we aren't close enough."
        ]
    }
};
