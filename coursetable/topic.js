let topicsArray=[
    "爆睡！夢世界大作戰",
    "不理不理王國的秘寶",
    "風起雲湧！ 夕陽下的春日部男孩",
    "春日部野生王國",
    "大對決！機器人爸爸的反擊"
];

let startDate=new Date();

function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1,startDay); 
    startDate.setHours(0); 
    startDate.setMinutes(0);
    startDate.setSeconds(0);
};
//setMonthAndDay(3,7);