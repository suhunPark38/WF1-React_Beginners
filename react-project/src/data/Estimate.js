/*
견적 데이터가 저장될 공간.
원래는 products에서 배열을 import해서 작성하려고 했으나 간단하지 않아 일단은 일일히 작성함.
 */
const estimates = [
    {type:'최고사양 견적', cpu: '인텔 코어i7-14세대 14700K', gpu:'XFX 라데온 RX 6700 SWFT 309 CORE D6 10GB', board:'MSI MAG B760M 박격포 맥스 WIFI', ram:'마이크론 Crucial DDR5-5600 CL46 PRO 패키지 대원씨티에스 (32GB(16Gx2))', ssd:'SK하이닉스 Gold P31 M.2 NVMe (500GB)', power:'잘만 MegaMax 600W 80PLUS STANDARD', computerCase:'ABKO SUITMASTER AL1000 그레이 (빅타워)', fan: 'ASUS ROG RYUJIN III 360 ARGB WHITE EDITION'},
    {type:'비싼 견적', cpu:'인텔 코어i7-14세대 14700K', gpu:'ASUS GeForce RTX 4090 TUF GAMING O24G OC D6X 24GB', board:'ROG MAXIMUS Z690 EXTREME GLACIAL STCOM (인텔Z690/E-ATX)', ram:'CORSAIR DDR5-5600 CL40 VENGEANCE RGB BLACK', ssd:'CORSAIR MP600 PRO LPX M.2 NVMe 2280 8TB', power:'ASUS ROG STRIX THOR 1600T (ATX/1600W)', computerCase:'ABKO SUITMASTER AL1000 그레이 (빅타워)', fan:'ASUS ROG RYUJIN III 360 ARGB WHITE EDITION'},
    {type:'고사양 견적', cpu:'인텔 코어 13세대 i9-13900KS', gpu:'XFX 라데온 RX 6700 SWFT 309 CORE D6 10GB', board:'MSI MAG B760M 박격포 맥스 WIFI', ram:'마이크론 Crucial DDR5-5600 CL46 PRO 패키지 대원씨티에스 (32GB(16Gx2))', ssd:'SK하이닉스 Gold P31 M.2 NVMe (500GB)', power:'잘만 MegaMax 600W 80PLUS STANDARD', computerCase:'ABKO SUITMASTER AL1000 그레이 (빅타워)', fan:'ASUS ROG RYUJIN III 360 ARGB WHITE EDITION'},
    {type:'최신 견적', cpu:'인텔 코어 13세대 i9-13900KS', gpu:'ASUS GeForce RTX 4090 TUF GAMING O24G OC D6X 24GB', board:'ROG MAXIMUS Z690 EXTREME GLACIAL STCOM (인텔Z690/E-ATX)', ram:'CORSAIR DDR5-5600 CL40 VENGEANCE RGB BLACK', ssd:'CORSAIR MP600 PRO LPX M.2 NVMe 2280 8TB', power:'ASUS ROG STRIX THOR 1600T (ATX/1600W)', computerCase:'ABKO SUITMASTER AL1000 그레이 (빅타워)', fan:'ASUS ROG RYUJIN III 360 ARGB WHITE EDITION'},
]


export default estimates;