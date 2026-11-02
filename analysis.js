// Editorial interpretations of the quiz, not a psychological assessment.
const DOG_DETAILS = [
 {strength:'能保持自己的判断，也愿意亲自试试看。别人还在等共识的时候，你往往已经找到了一条属于自己的路。',bond:'喜欢能并肩探索、又不必时时报备的关系。分享新发现，是你主动靠近一个人的方式。',stress:'事情失去自由度时，你可能先撤回自己的空间，再独自想办法。旁人容易把这段安静误会成冷淡。',care:'可以先说一句“我需要一点时间，但不是不在乎你”。边界说清楚，比让对方猜更轻松。',ritual:'选一条没走过的小路散步，把遇见的小事分享给一个喜欢的人。'},
 {strength:'擅长在未知里找线索，把模糊的想法拆成可以行动的小步骤。你的好奇心常常带着一份清醒。',bond:'愿意一起研究问题、尝试新东西。你常用“我帮你想想办法”表达在意，也珍惜对方对你能力的信任。',stress:'容易把休息也变成需要完成的任务。遇到失控的事，可能反复复盘，想找到那个最优解。',care:'先问一句“你想让我听一听，还是一起想办法？”有时陪伴本身已经足够，不必马上解决。',ritual:'留二十分钟做没有成果的小事，画乱线、发呆，或者陪小狗绕一圈。'},
 {strength:'能感受到细小的美好，不需要用热闹证明生活有趣。你给关系留白，也让别人更容易放松。',bond:'比起密集安排，你更喜欢低负担的陪伴：各做各的事，偶尔对视一下，就知道对方在。',stress:'情绪拥挤时，可能先把感受藏起来，等自己消化。别人未必知道，你其实也需要被轻轻问候。',care:'不必等想明白全部情绪才开口。可以从“今天有点累，想安静地和你待一会儿”开始。',ritual:'给自己找一个固定的发呆角落，今天只记录一件让你舒服的小事。'},
 {strength:'会认真照顾熟悉的人和事，把承诺落实在细节里。稳定的节奏，让你在变化中也能找到落脚点。',bond:'慢慢熟悉以后才会卸下防备。你看重尊重习惯、说话算数，以及对方愿意提前沟通安排。',stress:'临时变动可能消耗你很多力气。为了不添麻烦，你有时会先配合，再默默消化不舒服。',care:'把“都可以”换成一个具体偏好。你可以温和地坚持，熟悉感也可以由两个人一起建立。',ritual:'保留一个熟悉的小仪式，再给今天留一个很小的计划外选择。'},
 {strength:'能把好奇和热情传递给身边的人。你愿意先迈出一步，让新环境很快有了可以亲近的温度。',bond:'喜欢一起发现世界，也喜欢及时分享心情。对方愿意回应你的兴奋，会让你感觉被认真接住。',stress:'可能习惯活跃气氛，难过时却担心扫兴。一直当开心果，也会有电量不足的时候。',care:'允许自己说“今天我没那么有精神”。亲近的人可以陪你过阴天，不必只看到你晴朗的一面。',ritual:'约一次不用负责气氛的小聚，把想说和不想说的都交给当天的心情。'},
 {strength:'有发起一件事的勇气，也能把大家带动起来。面对新任务，你往往愿意边试边调整。',bond:'喜欢有来有往的行动感，一起计划出游、研究玩法，比空泛的承诺更让你心动。',stress:'事情卡住时，可能不自觉接过所有安排。急着把问题解决，也容易忽略自己和别人的疲惫。',care:'发起不等于包办。先分好一件小任务，再留时间听听别人想怎么做。',ritual:'下一次聚会交给朋友选地点，你只负责准时出现和开心。'},
 {strength:'能注意到别人的情绪，让普通的陪伴也有被重视的感觉。你的温柔常常落在记得的小事里。',bond:'喜欢稳定的回应和真实的分享。你不一定需要盛大的表达，但会在意自己的心意有没有被看见。',stress:'可能太快替别人找理由，把不舒服往后放。表面说没关系，心里却慢慢累积了委屈。',care:'关心别人之前，先问自己愿不愿意。温柔和拒绝可以同时存在，不必靠付出来换取安心。',ritual:'今天给自己准备一份平时会替朋友准备的小礼物。'},
 {strength:'用行动维持关系的稳定，答应的事会认真完成。你让人安心的地方，是平凡日子里的持续在场。',bond:'重视坦诚、节奏一致和具体承诺。一起吃顿饭、把日常安排好，都是你喜欢的亲密。',stress:'可能默默承担太多，觉得自己应该先把事情处理好。情绪没来得及表达，已经变成新的待办。',care:'把需求说得具体一点：“这件事我想请你一起做。”被照顾不需要先证明自己足够辛苦。',ritual:'把一件平时独自承担的小事分出去，给自己留一点没有任务的时间。'}
];
const AXIS_NOTES = [
 ['社交能量','独处充电','向外联结','你更常在安静、低负担的陪伴里恢复精力。需要独处不等于不喜欢人。','你更常通过分享和互动获得能量。热情不代表你不需要休息。','你会在互动和独处之间切换，可能更看当时的精力和身边是谁。'],
 ['探索偏好','熟悉安定','探索新鲜','你更看重可预期的节奏和熟悉的体验。稳定也可以是一种主动选择。','你更容易被未知和新可能吸引，愿意给计划外的惊喜留位置。','你既想保留可靠的落脚点，也愿意给新鲜事物开一扇门。'],
 ['表达方式','实际行动','感受共鸣','你更常用具体的帮助表达在意。也可以确认一下，对方此刻是否只想被听见。','你更常先接住情绪，再考虑怎么办。照顾感受时，也记得照顾自己的边界。','你会在倾听与行动之间切换，关系里的不同情境可能需要不同回应。']
];
function buildAnalysis(answers,types,questions,result){
 const {index,sums}=result, detail=DOG_DETAILS[index];
 // Change the energy bit for a complementary rhythm; keep it for shared rhythm.
 const companion=index^4;
 const buddy=index^1;
 const axes=AXIS_NOTES.map((axis,i)=>{
  const n=sums[i],a=n,b=4-n;
  const explanation=n===2?axis[5]:axis[n>2?4:3];
  return {name:axis[0],left:axis[1],right:axis[2],a,b,explanation,
   picks:answers.slice(i*4,i*4+4).map((choice,j)=>({label:questions[i*4+j][0],text:questions[i*4+j][3][choice]}))};
 });
 const mixed=axes.filter((_,i)=>sums[i]===2).map(a=>a.name);
 return {detail,axes,companion,buddy,mixed,
  companionText:sums[0]>=2?'你负责发起和分享，对方提醒你慢一点、留一点自己的时间。提前说好各自的社交电量，差异才会变成互补。':'对方可能带你发现新的联结，你也能给关系留出安静的空间。约好独处的边界，不需要强迫彼此同步。',
  buddyText:'你们在社交节奏和新鲜感偏好上比较接近，容易约到一起；表达关心时，一个更倾向倾听，一个更倾向行动，可以互相补位。'};
}
function analysisHTML(answers,types,questions,result){
 const a=buildAnalysis(answers,types,questions,result),d=a.detail;
 return `<div class="deep-analysis"><section class="analysis-section"><div class="section-index">01 / 读懂你的小狗</div><h2>为什么是这只小狗？</h2><p class="analysis-intro">以下解读来自你这次的选择。每个维度各有 4 道题，票数只表示本次选择，不是能力高低。</p>${a.axes.map(axis=>`<article class="axis-detail"><h3>${axis.name}</h3><div class="axis-votes"><span>${axis.left} · ${axis.b} 票</span><span>${axis.right} · ${axis.a} 票</span></div><p>${axis.explanation}</p><details><summary>看看我在这些片段里的选择</summary><ul>${axis.picks.map(p=>`<li><b>${p.label}</b><br>${p.text}</li>`).join('')}</ul></details></article>`).join('')}<p class="analysis-footnote">${a.mixed.length?`你的${a.mixed.join('、')}恰好居中，说明这次选择呈现两种倾向。为了给出一个主类型，平票固定归入图表右侧；另一面也同样属于你。`:'这些倾向在本次答案中较为一致，但换个情境、换个阶段，也可能有不同表现。'}</p></section><section class="analysis-section"><div class="section-index">02 / 你的相处说明书</div><h2>靠近你，可以这样做</h2>${[['闪光的地方',d.strength],['亲近时的你',d.bond],['电量低的时候',d.stress],['一句温柔提醒',d.care]].map(([title,text])=>`<article class="insight"><h3>${title}</h3><p>${text}</p></article>`).join('')}</section><section class="analysis-section"><div class="section-index">03 / 小狗遇见小狗</div><h2>谁可能和你合拍？</h2><article class="match-card"><span class="match-label">互补搭子</span><h3>${types[a.companion][0]} · ${types[a.companion][1]}</h3><p>${a.companionText}</p></article><article class="match-card"><span class="match-label">同频玩伴</span><h3>${types[a.buddy][0]} · ${types[a.buddy][1]}</h3><p>${a.buddyText}</p></article><p class="analysis-footnote">按这份测试的三个维度做的趣味配对，不代表关系预测。真实的合拍，来自沟通、尊重与相处。</p></section><section class="analysis-section small-ritual"><div class="section-index">04 / 今天的小任务</div><h2>给自己一点点偏爱</h2><p>${d.ritual}</p></section><details class="dog-gallery"><summary>小狗图鉴 · 看看全部 8 种性格</summary><div class="gallery-list">${types.map((t,i)=>`<article class="gallery-card ${i===result.index?'is-you':''}"><h3>${t[0]}${i===result.index?' · 本次的你':''}</h3><span>${t[1]}</span><p>${t[2]}</p></article>`).join('')}</div></details></div>`;
}
if(typeof module!=='undefined')module.exports={DOG_DETAILS,AXIS_NOTES,buildAnalysis,analysisHTML};
