import lesson1 from "@/data/lessons/lesson-1.json";
import lesson2 from "@/data/lessons/lesson-2.json";
import type { Lesson, Song, SongSection } from "@/lib/types";

function lessonToSection(lesson: Lesson, id: string, title: string): SongSection {
  return {
    id,
    title,
    subtitle: lesson.subtitle,
    lineCount: lesson.lineCount,
    learningGoals: lesson.learningGoals,
    lyrics: lesson.lyrics,
    normalSpeech: lesson.normalSpeech,
    vocabulary: lesson.vocabulary,
    grammar: lesson.grammar,
    nuance: lesson.nuance,
    review: lesson.review,
  };
}

export const songs = [
  {
    id: "drama-grand-prix",
    title: "Drama Grand Prix",
    subtitle: "Yorushika",
    titleMeaning: [
      '"Drama Grand Prix" literally means "Drama Grand Prix" or "Drama Championship."',
      'The title is ironic. Rather than referring to acting, the song portrays a world where people compete over suffering, victimhood, guilt, and emotional performance. Everyone is trying to become the most convincing "main character" of their own drama.',
    ],
    sections: [
      lessonToSection(lesson1, "verse-1", "Verse 1"),
      lessonToSection(lesson2, "chorus-1", "Chorus 1"),
    ],
  },
  {
    id: "isana",
    title: "いさな",
    subtitle: "Yorushika",
    titleMeaning: [
      "「いさな」 is an ancient Japanese word meaning \"whale\". It is a poetic and literary word that is rarely used in modern Japanese, creating a dreamy and tranquil atmosphere from the beginning of the song.",
    ],
    sections: [
      {
        id: "verse-1",
        title: "Verse 1",
        lineCount: 8,
        learningGoals: [
          "理解身体部位词如何组成安静的鲸鱼意象。",
          "掌握 ～のよう / まるで～のよう 的比喻表达。",
          "理解 窓辺を泳いで 中 を 表示经过的空间。",
          "感受 琥珀、まなこ、夜 带来的梦幻氛围。",
        ],
        lyrics: [
          [
            { text: "あなたの胸びれ", ruby: [{ base: "胸", reading: "むな" }] },
          ],
          [
            { text: "窓辺を泳いで", ruby: [{ base: "窓辺", reading: "まどべ" }, { base: "泳", reading: "およ" }] },
          ],
          [
            { text: "柔らかに", ruby: [{ base: "柔", reading: "やわ" }] },
          ],
          [
            { text: "溶けた琥珀のよう", ruby: [{ base: "溶", reading: "と" }, { base: "琥珀", reading: "こはく" }] },
          ],
          [
            { text: "あなたの鼻先", ruby: [{ base: "鼻先", reading: "はなさき" }] },
          ],
          [
            { text: "背びれと口髭", ruby: [{ base: "背", reading: "せ" }, { base: "口髭", reading: "くちひげ" }] },
          ],
          [
            { text: "静かなまなこは", ruby: [{ base: "静", reading: "しず" }] },
          ],
          [
            { text: "まるで夜の", ruby: [{ base: "夜", reading: "よる" }] },
          ],
        ],
        normalSpeech: [
          {
            label: "Line 1",
            breakdown: "あなたの｜胸びれ",
            ruby: [{ base: "胸", reading: "むな" }],
            natural: "あなたの胸びれが見える。",
            translation: "你的胸鳍。",
            note: "胸びれ 是鲸鱼、鱼类身体部位的词，开头直接把“你”写成海中的生物。"
          },
          {
            label: "Line 2",
            breakdown: "窓辺を｜泳いで",
            ruby: [{ base: "窓辺", reading: "まどべ" }, { base: "泳", reading: "およ" }],
            natural: "窓辺を泳いでいる。",
            translation: "在窗边游过。",
            note: "这里的 を 不是宾语，而是表示经过的空间：穿过 / 沿着窗边游。"
          },
          {
            label: "Line 3",
            breakdown: "柔らかに",
            ruby: [{ base: "柔", reading: "やわ" }],
            natural: "柔らかく。",
            translation: "柔和地。",
            note: "柔らかに 比 柔らかく 更文学、更轻。"
          },
          {
            label: "Line 4",
            breakdown: "溶けた｜琥珀の｜よう",
            ruby: [{ base: "溶", reading: "と" }, { base: "琥珀", reading: "こはく" }],
            natural: "溶けた琥珀のようだ。",
            translation: "像融化的琥珀一样。",
            note: "～のようだ 表示“像……一样”，这里把光、颜色和流动感叠在一起。"
          },
          {
            label: "Line 5",
            breakdown: "あなたの｜鼻先",
            ruby: [{ base: "鼻先", reading: "はなさき" }],
            natural: "あなたの鼻先が見える。",
            translation: "你的鼻尖。",
            note: "鼻先 指鼻子的前端，画面像镜头慢慢贴近。"
          },
          {
            label: "Line 6",
            breakdown: "背びれと｜口髭",
            ruby: [{ base: "背", reading: "せ" }, { base: "口髭", reading: "くちひげ" }],
            natural: "背びれと口髭が見える。",
            translation: "背鳍和嘴边的须。",
            note: "と 连接两个名词，把身体细节一项项列出来。"
          },
          {
            label: "Line 7",
            breakdown: "静かな｜まなこは",
            ruby: [{ base: "静", reading: "しず" }],
            natural: "静かな目は。",
            translation: "那双安静的眼睛。",
            note: "まなこ 是比较文学化的“眼睛”，比 目 更有诗意。"
          },
          {
            label: "Line 8",
            breakdown: "まるで｜夜の",
            ruby: [{ base: "夜", reading: "よる" }],
            natural: "まるで夜のようだ。",
            translation: "简直像夜晚一样。",
            note: "まるで 常和 ようだ 搭配，表示“简直像……”。歌词停在 夜の，留下柔软的余韵。"
          }
        ],
        vocabulary: [
          { term: "胸びれ", reading: "むなびれ", meaning: "胸鳍", note: "鱼类或鲸类身体两侧的鳍" },
          { term: "窓辺", reading: "まどべ", meaning: "窗边", note: "辺 表示附近、周围" },
          { term: "泳ぐ", reading: "およぐ", meaning: "游泳 / 游动", note: "这里用于鲸鱼般的梦幻动作" },
          { term: "柔らか", reading: "やわらか", meaning: "柔软 / 柔和", note: "柔らかに 是文学式副词用法" },
          { term: "溶ける", reading: "とける", meaning: "融化", note: "溶けた = 融化了的" },
          { term: "琥珀", reading: "こはく", meaning: "琥珀", note: "带有透明、金色、古老的意象" },
          { term: "鼻先", reading: "はなさき", meaning: "鼻尖", note: "鼻子的最前端" },
          { term: "背びれ", reading: "せびれ", meaning: "背鳍", note: "背部的鳍" },
          { term: "口髭", reading: "くちひげ", meaning: "嘴边的胡须 / 须", note: "这里让形象更像鲸或幻想生物" },
          { term: "まなこ", reading: "まなこ", meaning: "眼睛", note: "文学化表达，普通说法是 目" },
          { term: "まるで", reading: "まるで", meaning: "简直像", note: "常和 よう 搭配" },
          { term: "夜", reading: "よる", meaning: "夜晚", note: "这里象征安静、深色、沉睡" },
        ],
        grammar: [
          { title: "場所 + を + 移動动词", body: ["窓辺を泳いで 的 を 表示经过的空间。", "类似：道を歩く / 空を飛ぶ / 海を泳ぐ。"] },
          { title: "形容动词 + に", body: ["柔らかに = 柔和地。", "形容动词变副词时常用 に，比如 静かに / きれいに。"] },
          { title: "～のよう", body: ["溶けた琥珀のよう = 像融化的琥珀一样。", "名词 + のよう 用来做比喻。"] },
          { title: "まるで～のよう", body: ["まるで夜のようだ = 简直像夜晚一样。", "まるで 会加强比喻感，让画面更梦幻。"] },
          { title: "名词列举：A と B", body: ["背びれと口髭 用 と 连接两个名词。", "这种列举方式让画面像慢慢描写身体细节。"] },
        ],
        nuance: "Verse 1 几乎没有直接说明情节，而是用身体部位和光影来描写“你”。胸びれ、背びれ、口髭 让“你”带有鲸的形象；窓辺 又把海的动作放进室内空间，制造梦境感。琥珀、まなこ、夜 都是安静、古老、柔暗的意象，让整段像在半梦半醒中看见一只温柔的鲸。",
        review: [
          "胸びれ / 背びれ = 胸鳍 / 背鳍。",
          "場所 + を + 移動动词 = 经过某个空间。",
          "柔らかに = 柔和地，文学感更强。",
          "～のよう = 像……一样。",
          "まなこ = 文学化的“眼睛”。",
        ],
      },
      {
        id: "chorus-1",
        title: "Chorus 1",
        lineCount: 9,
        learningGoals: [
          "理解命令形 / て形连接在 chorus 中制造的流动感。",
          "掌握 想い馳せる、瞼を落とす、蓋する 等诗性表达。",
          "理解 ほど 表示程度。",
          "感受 波、眠り、微睡み 带来的沉入梦境的意象。",
        ],
        lyrics: [
          [
            { text: "話して　鳴いて", ruby: [{ base: "話", reading: "はな" }, { base: "鳴", reading: "な" }] },
          ],
          [
            { text: "僕ら波を掻いてた", ruby: [{ base: "僕", reading: "ぼく" }, { base: "波", reading: "なみ" }, { base: "掻", reading: "か" }] },
          ],
          [
            { text: "陸に想い馳せるように", ruby: [{ base: "陸", reading: "りく" }, { base: "想", reading: "おも" }, { base: "馳", reading: "は" }] },
          ],
          [
            { text: "瞼を落として　蓋して", ruby: [{ base: "瞼", reading: "まぶた" }, { base: "落", reading: "お" }, { base: "蓋", reading: "ふた" }] },
          ],
          [
            { text: "すぐは覚めないほど眠って", ruby: [{ base: "覚", reading: "さ" }, { base: "眠", reading: "ねむ" }] },
          ],
          [
            { text: "呼吸を吹かして", ruby: [{ base: "呼吸", reading: "こきゅう" }, { base: "吹", reading: "ふ" }] },
          ],
          [
            { text: "さぁ深く泳いで　泳いで", ruby: [{ base: "深", reading: "ふか" }, { base: "泳", reading: "およ" }] },
          ],
          [
            { text: "眠りの浅いその波間を", ruby: [{ base: "眠", reading: "ねむ" }, { base: "浅", reading: "あさ" }, { base: "波間", reading: "なみま" }] },
          ],
          [
            { text: "白く微睡みながら", ruby: [{ base: "白", reading: "しろ" }, { base: "微睡", reading: "まどろ" }] },
          ],
        ],
        normalSpeech: [
          {
            label: "Line 1",
            breakdown: "話して｜鳴いて",
            ruby: [{ base: "話", reading: "はな" }, { base: "鳴", reading: "な" }],
            natural: "話して、鳴いて。",
            translation: "说着，鸣叫着。",
            note: "話す 是人类的动作，鳴く 是动物发声；两者并列，让“我们”处在人与鲸之间。"
          },
          {
            label: "Line 2",
            breakdown: "僕ら｜波を｜掻いてた",
            ruby: [{ base: "僕", reading: "ぼく" }, { base: "波", reading: "なみ" }, { base: "掻", reading: "か" }],
            natural: "僕らは波を掻いていた。",
            translation: "我们曾拨开海浪。",
            note: "掻いてた = 掻いていた 的口语缩略，表示过去正在做或持续做的动作。"
          },
          {
            label: "Line 3",
            breakdown: "陸に｜想い｜馳せる｜ように",
            ruby: [{ base: "陸", reading: "りく" }, { base: "想", reading: "おも" }, { base: "馳", reading: "は" }],
            natural: "陸に想いを馳せるように。",
            translation: "像是在思念陆地一样。",
            note: "想いを馳せる 是固定感很强的诗性表达，意思是把心思投向远方。"
          },
          {
            label: "Line 4",
            breakdown: "瞼を｜落として｜蓋して",
            ruby: [{ base: "瞼", reading: "まぶた" }, { base: "落", reading: "お" }, { base: "蓋", reading: "ふた" }],
            natural: "瞼を閉じて、蓋をして。",
            translation: "垂下眼帘，盖上盖子。",
            note: "瞼を落とす 是诗性说法，接近“闭上眼睛”。蓋する 像是把意识封住。"
          },
          {
            label: "Line 5",
            breakdown: "すぐは｜覚めない｜ほど｜眠って",
            ruby: [{ base: "覚", reading: "さ" }, { base: "眠", reading: "ねむ" }],
            natural: "すぐには覚めないほど眠って。",
            translation: "睡到不会马上醒来的程度。",
            note: "ほど 表示程度：眠り很深，深到不会立刻醒。"
          },
          {
            label: "Line 6",
            breakdown: "呼吸を｜吹かして",
            ruby: [{ base: "呼吸", reading: "こきゅう" }, { base: "吹", reading: "ふ" }],
            natural: "呼吸を吹かして。",
            translation: "吹起呼吸。",
            note: "呼吸を吹かす 不是普通日常搭配，更像把呼吸写成气流或鲸的喷息。"
          },
          {
            label: "Line 7",
            breakdown: "さぁ｜深く｜泳いで｜泳いで",
            ruby: [{ base: "深", reading: "ふか" }, { base: "泳", reading: "およ" }],
            natural: "さぁ、深く泳いで、泳いで。",
            translation: "来吧，深深地游下去，游下去。",
            note: "泳いで 的重复像催眠，也像不断下潜。"
          },
          {
            label: "Line 8",
            breakdown: "眠りの｜浅い｜その｜波間を",
            ruby: [{ base: "眠", reading: "ねむ" }, { base: "浅", reading: "あさ" }, { base: "波間", reading: "なみま" }],
            natural: "眠りの浅いその波間を泳いで。",
            translation: "穿过那片睡意浅浅的波间。",
            note: "波間 指浪与浪之间的空间；这里把睡眠也写成海面。"
          },
          {
            label: "Line 9",
            breakdown: "白く｜微睡み｜ながら",
            ruby: [{ base: "白", reading: "しろ" }, { base: "微睡", reading: "まどろ" }],
            natural: "白く微睡みながら。",
            translation: "一边在白色的朦胧睡意中打盹。",
            note: "ながら 表示“一边……一边……”。微睡む 是半睡半醒。"
          }
        ],
        vocabulary: [
          { term: "話す", reading: "はなす", meaning: "说话", note: "人类的交流动作" },
          { term: "鳴く", reading: "なく", meaning: "鸣叫 / 发声", note: "多用于动物、鸟、鲸等声音" },
          { term: "僕ら", reading: "ぼくら", meaning: "我们", note: "僕 + ら，较柔和的“我们”" },
          { term: "波", reading: "なみ", meaning: "波浪", note: "本段核心意象" },
          { term: "掻く", reading: "かく", meaning: "拨开 / 划动", note: "波を掻く = 用手或身体拨开波浪" },
          { term: "陸", reading: "りく", meaning: "陆地", note: "和海相对" },
          { term: "想い馳せる", reading: "おもいはせる", meaning: "遥想 / 思念远方", note: "常写作 想いを馳せる" },
          { term: "瞼", reading: "まぶた", meaning: "眼皮 / 眼睑", note: "瞼を落とす = 垂下眼帘" },
          { term: "蓋する", reading: "ふたする", meaning: "盖上 / 封住", note: "可用于具体的盖子，也可用于封住意识或感情" },
          { term: "覚める", reading: "さめる", meaning: "醒来", note: "夢から覚める / 眠りから覚める" },
          { term: "眠る", reading: "ねむる", meaning: "睡觉 / 入眠", note: "比 寝る 更书面、更柔和" },
          { term: "呼吸", reading: "こきゅう", meaning: "呼吸", note: "这里和鲸的喷息意象相连" },
          { term: "吹かす", reading: "ふかす", meaning: "吹起 / 喷出", note: "带有把气息吹出来的感觉" },
          { term: "深く", reading: "ふかく", meaning: "深深地", note: "深い 的副词形式" },
          { term: "波間", reading: "なみま", meaning: "波间 / 浪与浪之间", note: "非常有画面感的词" },
          { term: "微睡む", reading: "まどろむ", meaning: "打盹 / 半睡半醒", note: "诗性、柔软的睡眠表达" },
        ],
        grammar: [
          { title: "て形连接动作", body: ["話して、鳴いて、泳いで 都是て形。", "て形可以把动作连续串起来，形成流动感。"] },
          { title: "～ていた / ～てた", body: ["掻いてた = 掻いていた。", "表示过去某段时间正在做，或过去持续的状态。"] },
          { title: "想いを馳せる", body: ["固定表达：A に想いを馳せる。", "意思是把心思投向 A，遥想或思念 A。"] },
          { title: "ほど：程度", body: ["すぐは覚めないほど眠って = 睡到不会马上醒来的程度。", "ほど 前面的内容说明程度有多强。"] },
          { title: "副词：形容词く形", body: ["深い → 深く，白い → 白く。", "深く泳いで = 深深地游；白く微睡みながら = 白白地 / 泛白地打盹。"] },
          { title: "～ながら", body: ["微睡みながら = 一边打盹一边……。", "ながら 表示两个动作或状态同时发生。"] },
        ],
        nuance: "Chorus 1 从安静的观察进入流动的动作：话语、鸣叫、拨浪、想念陆地、闭眼、沉睡、呼吸、下潜。人类动作和鲸的动作混在一起，让“僕ら”像是在梦里变成海中的生物。反复出现的 泳いで 和 眠り / 微睡み 把情绪往更深处带，像不是醒着唱歌，而是在浅眠的波间慢慢下沉。",
        review: [
          "鳴く = 动物发声、鸣叫。",
          "波を掻く = 拨开 / 划开波浪。",
          "想いを馳せる = 遥想、思念远方。",
          "ほど = 到……程度。",
          "微睡む = 半睡半醒、打盹。",
        ],
      },
    ],
  },
] satisfies Song[];

export function getSong(id: string) {
  return songs.find((song) => song.id === id);
}

export function getVocabulary() {
  return songs.flatMap((song) =>
    song.sections.flatMap((section) =>
      section.vocabulary.map((entry) => ({
        ...entry,
        songId: song.id,
        sectionId: section.id,
        sourceTitle: `${song.title} - ${section.title}`,
      })),
    ),
  );
}

export function getGrammarPoints() {
  return songs.flatMap((song) =>
    song.sections.flatMap((section) =>
      section.grammar.map((point) => ({
        ...point,
        songId: song.id,
        sectionId: section.id,
        sourceTitle: `${song.title} - ${section.title}`,
      })),
    ),
  );
}

export function getReviewCards() {
  return songs.flatMap((song) =>
    song.sections.flatMap((section) =>
      section.review.map((prompt, index) => ({
        id: `${song.id}-${section.id}-${index}`,
        songId: song.id,
        sectionId: section.id,
        sourceTitle: `${song.title} - ${section.title}`,
        prompt,
        due: "Ready",
      })),
    ),
  );
}
