const products = [
    { type: 'CPU', name: 'AMD 애슬론 3000G', performance: 10, price: 50000, manufacturer:'AMD', release:'2019.12',
    detail: `
                AMD CPU종류        애슬론 APU        
                소켓 구분          AMD(소켓AM4)
                세대 구분          1세대(Zen)        
                출시일             2019 4분기
                제조 공정          14nm

                사양
                코어 수            2코어        
                쓰레드 수          4쓰레드
                기본 클럭          3.5GHz        
                L2 캐시            1MB
                L3 캐시            4MB        
                TDP                35W
                PCIe 버전          PCIe3.0

                메모리 사양
                메모리 규격        DDR4       
                메모리 클럭        2667MHz
                메모리 채널        2

                그래픽 사양
                내장그래픽         탑재       
                GPU 모델명         AMD 라데온 Vega 3
                GPU 코어 속도      1100MHz

                기술 지원
                SenseMI           ○
            `, image: '/images/AMD 애슬론 3000g.png'},

    { type: '메인보드', name: 'ASUS PRIME A320M-K', performance: 10 , price: 65000, manufacturer:'ASUS', release:'2017.05', detail:
            `
    제조회사        ASUS PRIME        
    등록년월        2017년 05월
    기본 사양
    제품 분류        AMD CPU용        
    CPU 소켓         AMD(소켓AM4)
    세부 칩셋        AMD A320        
    CPU 장착수        1개
    폼팩터        M-ATX (22.6x22.1cm)        
    전원부        6페이즈
    메모리
    메모리 종류        DDR4        
    메모리 속도        PC4-25600 (3,200MHz)(OC)
    메모리 슬롯        2개        
    메모리 채널        듀얼
    메모리 용량        최대 32GB
    PCIe버전
    PCIe        ○
    PCIe슬롯
    PCIex16        1개        
    PCIex1        2개
    저장장치        
    저장장치        M.2        1개
    SATA3        4개
    M.2 연결
    PCIe        ○        
    NVMe        ○
    SATA        ○
    M.2 폼팩터
    2242        ○        
    2260        ○
    2280        ○
    그래픽 출력
    D-SUB        ○        
    HDMI        ○
    후면단자
    USB 3.0        ○        
    USB 2.0        ○
    RJ-45        ○        
    오디오잭        ○
    PS/2        ○
    USB 3.0        후면 4개 
    USB 2.0        후면 2개
    네트워크
    유선랜 칩셋        Realtek RTL8111H        
    유선랜 속도        기가비트
    RJ-45        1개
    오디오
    오디오 칩셋        Realtek ALC887        
    아날로그 출력        7.1채널(8ch)
    특징
    UEFI        ○
    유통회사        대원CTS
    `, image: '/images/ASUS PRIME A320M-K.png'},

    {type:'gpu', name:'내장 그래픽',performance: 10, price: 0, detail: 'cpu에 내장된 그래픽 카드입니다.',image: '/images/내장 그래픽.jpg' },

    {type: '쿨러', name:'기본 쿨러', performance: 10, price: 10, detail: '기본으로 제공되는 쿨러입니다.',image: '/images/기본 쿨러.jpg'},

    { type: '메인보드', name: 'ASUS PRIME A320M-K',performance:150 , price: 65000, manufacturer:'ASUS', release:'2017.05',

    detail:
    `
    제조회사        ASUS PRIME        
    등록년월        2017년 05월

    기본 사양
    제품 분류        AMD CPU용        
    CPU 소켓         AMD(소켓AM4)
    세부 칩셋        AMD A320        
    CPU 장착수        1개
    폼팩터        M-ATX (22.6x22.1cm)        
    전원부        6페이즈

    메모리
    메모리 종류        DDR4        
    메모리 속도        PC4-25600 (3,200MHz)(OC)
    메모리 슬롯        2개        
    메모리 채널        듀얼
    메모리 용량        최대 32GB

    PCIe버전
    PCIe        ○

    PCIe슬롯
    PCIex16        1개        
    PCIex1        2개

    저장장치        
    저장장치        M.2        1개
    SATA3        4개

    M.2 연결
    PCIe        ○        
    NVMe        ○
    SATA        ○

    M.2 폼팩터
    2242        ○        
    2260        ○
    2280        ○

    그래픽 출력
    D-SUB        ○        
    HDMI        ○

    후면단자
    USB 3.0        ○        
    USB 2.0        ○
    RJ-45        ○        
    오디오잭        ○
    PS/2        ○

    USB 3.0        후면 4개 
    USB 2.0        후면 2개

    네트워크
    유선랜 칩셋        Realtek RTL8111H        
    유선랜 속도        기가비트
    RJ-45        1개

    오디오
    오디오 칩셋        Realtek ALC887        
    아날로그 출력        7.1채널(8ch)

    특징
    UEFI        ○
    유통회사        대원CTS

    `, image: '/images/ASUS PRIME A320M-K.png'},
    { type: '램', name: '삼성전자 DDR4-3200 (4GB)',performance: 15 , price: 15000, manufacturer:'삼성전자', release:'2021.08',
    detail:
    `
    제조회사        삼성전자        
    등록년월        2021년 08월        
    제품 분류        DDR4
    메모리 규격        SO-DIMM        
    메모리 용량        4GB
    동작클럭(대역폭)        3200MHz (PC4-25600)        
    램개수        1개
    히트싱크        미포함
    `, image: '/images/삼성전자 DDR4-3200 (4GB).jpg'},
    { type: 'SSD', name: '삼성전자 PM9A1 M.2 NVMe (256GB)', performance: 15, price: 25000, manufacturer:'삼성전자', release:'2021.02',
    detail:`
    제조회사        삼성전자       
    등록년월        2021년 02월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe4.0x4 (64GT/s)        
    프로토콜        NVMe 1.3
    용량        256GB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드        
    RAM 탑재        DRAM 탑재
    RAM 타입        DDR4 512MB        
    컨트롤러        삼성
    게임기 호환        PS5 호환

    [성능]
    순차읽기        6,400MB/s        
    순차쓰기        2,700MB/s
    읽기IOPS        500K        
    쓰기IOPS        600K

    지원기능
    TRIM        ○        
    SLC캐싱        ○
    S.M.A.R.T        ○

    부가기능
    AES 암호화        ○

    [환경특성]
    MTBF        150만시간
    TBW        150TB

    쿨링 정보
    NVMe 방열판        방열판 미포함

    [크기/무게]
    가로        80mm        
    세로        22mm
    두께        2.38mm        
    무게        9g
    `, image: '/images/삼성전자 PM9A1 M.2 NVMe (256GB).jpg'},
    { type: '파워', name: '잘만 Wattbit II 400W', performance: 10, price: 40000, manufacturer:'잘만', release:'2020.08',
    detail:`
    제조회사        잘만        
    등록년월        2020년 08월
    제품 분류        ATX 파워        
    정격출력        400W
    +12V 출력방식        
    +12V 싱글레일        
    +12V 가용률        90%
    쿨링팬 크기        120mm 팬        
    쿨링팬 개수        1개(팬)
    깊이        140mm        
    A/S 보증기간        무상 3년

    DC 출력
    +3.3V 출력        16A        
    +5V 출력        15A
    +12V 출력        30A        
    -12V 출력        0.3A
    +5Vsb 출력        2.0A

    [커넥터]
    케이블연결        케이블일체형        
    메인전원        24핀(20+4)
    보조전원        8핀(4+4) 1개        
    PCIe 8핀(6+2)        2개
    SATA        4개        
    IDE 4핀        3개

    부가기능
    대기전력 1W 미만        ○
    내부설계
    105도 콘덴서        ○
    보호회로
    과전압(OVP)        ○        
    저전압(UVP)        ○
    과전력(OPP)        ○        
    단락(SCP)        ○
    `, image: '/images/잘만 Wattbit II 400W.jpg'},
    { type: '케이스', name: 'DAVEN 아이시스 3.0', performance: 20, price: 30000, manufacturer:'DAVEN', release:'2018.02',
    detail:`
    제조회사        DAVEN        
    등록년월        2018년 02월
    제품 분류        PC케이스(ATX)        
    케이스 크기        미들타워
    파워포함여부        파워미포함        
    지원파워규격        표준-ATX

    지원보드규격
    표준-ATX        ○        
    Micro-ATX        ○
    Mini-ITX        ○

    내부 확장
    13.3cm베이        1개        
    8.9cm베이        3개
    6.4cm베이        2개

    저장장치 장착        최대 5개
    PCI 슬롯(수평)        7개

    쿨러 / 튜닝
    쿨링팬        총1개        측면        통풍구
    후면        80mm

    외부포트
    USB        ○        
    USB 3.0        ○

    크기
    너비(W)        188mm        
    깊이(D)        390mm
    높이(H)        412mm

    호환성
    파워 장착        최대 190mm        
    파워 위치        상단
    GPU 장착        320mm        
    CPU쿨러 장착        155mm
    `, image: '/images/DAVEN 아이시스 3.0.jpg'},

    { type: 'CPU', name: 'Ryzen 5 5600G', performance: 30, price: 150000, manufacturer:'AMD', release:'2021.08',
    detail:`
    제조회사        AMD        
    등록년월        2021년 08월
    AMD CPU종류        라이젠5-4세대        
    소켓 구분        AMD(소켓AM4)
    세대 구분        4세대(Zen3)        
    출시일        2021 3분기
    제조 공정        7nm

    사양
    코어 수        6코어        
    쓰레드 수        12쓰레드
    기본 클럭        3.9GHz        
    최대 클럭        4.4GHz
    L2 캐시        3MB        
    L3 캐시        16MB
    연산 체계        64비트        
    TDP        65W
    PCIe 버전        PCIe3.0

    메모리 사양
    메모리 규격        DDR4        
    메모리 클럭        3200MHz
    메모리 채널        2

    그래픽 사양
    내장그래픽        탑재        
    GPU 모델명        AMD 라데온 그래픽 7
    GPU 코어 속도        1,900MHz

    기술 지원
    SenseMI        ○        
    Ryzen Master        ○

    구성
    패키지 형태        
    멀티팩(정품)        
    쿨러        Wraith Stealth 포함
    시네벤치R23(싱글)        1,446점        
    시네벤치R23(멀티)        10489
    `, image: '/images/Ryzen 5 5600G.jpg'},
    { type: '메인보드', name: 'GiGABYTE A520M K V2', performance: 30, price: 80000, manufacturer:'GIGABYTE', release:'2021.04',
    detail:`
    소켓        AMD-소켓AM4
    규격        Micro-ATX
    메모리 종류        DDR4
    VGA 단자        D-SUB, HDMI
    확장슬롯        PCI-Express
    단자        SATA3(4개), M.2 SSD
    사운드 채널        7.1채널
    부가기능        UEFI바이오스, XMP, TPM헤더
    네트워크        기가비트랜
    USB단자        USB3.2 Gen1(4개), USB2.0(2개)
    사운드칩셋        Realtek
    `, image: '/images/GiGABYTE A520M K V2.png'},
    { type: '램', name: '마이크론 Crucial DDR4-3200 CL22 (8GB) x 2', performance: 50, price: 50000, manufacturer:'마이크론', release:'2020.01',
    detail:`
    제조회사        마이크론
    사용 장치        데스크탑용
    제품 분류        DDR4
    메모리 규격        DIMM
    메모리 용량        8GB
    동작클럭(대역폭)        3200MHz (PC4-25600)
    램타이밍        CL22
    동작전압        1.20V        램개수        1개
    히트싱크        미포함
    `, image: '/images/마이크론 Crucial DDR4-3200 CL22 (8GB) x 2.jpg'},
    { type: 'SSD', name: 'SSD 512GB ESSENCORE KLEVV C710 NVMe', performance: 50, price: 60000, manufacturer:'ESSENCORE', release:'2020.03',
    detail:`
    제조회사        ESSENCORE       
    등록년월        2020년 03월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe3.0x4 (32GT/s)        
    프로토콜        NVMe
    용량        512GB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드        
    컨트롤러        실리콘모션 SM2263XT

    [성능]
    순차읽기        2,050MB/s        
    순차쓰기        1,650MB/s

    지원기능
    SLC캐싱        ○        
    S.M.A.R.T        ○
    ECC        ○
    부가기능
    전용 S/W        ○
    소프트웨어 지원
    마이그레이션        ○        
    관리기능        ○

    A/S기간
    5년        ○

    쿨링 정보
    NVMe 방열판        방열판 미포함

    [크기/무게]
    가로        80mm        
    세로        22mm
    두께        2.2mm        
    무게        7g
    `, image: '/images/SSD 512GB ESSENCORE KLEVV C710 NVMe.jpg'},
    { type: '파워', name: '잘만 ECOMAX 83+', performance: 50, price: 40000, manufacturer:'잘만', release:'2018.06',
    detail:`
    제조회사        잘만        
    등록년월        2018년 06월
    제품 분류        ATX 파워        
    정격출력        600W
    +12V 출력방식        +12V 다중레일        
    +12V 가용률        90%
    쿨링팬 크기        120mm 팬        
    쿨링팬 개수        1개(팬)
    깊이        140mm        
    A/S 보증기간        무상 3년

    DC 출력
    +3.3V 출력        16A        
    +5V 출력        15A
    +12V 출력        25A, 25A        
    12V 출력        0.3A
    +5Vsb 출력        2.0A

    [커넥터]
    케이블연결        케이블일체형        
    메인전원        24핀(20+4)
    보조전원        8핀(4+4) 1개        
    PCIe 8핀(6+2)        2개
    SATA        4개        
    IDE 4핀        3개

    부가기능
    대기전력 1W 미만        ○

    내부설계
    85도 콘덴서        ○

    보호회로
    과전압(OVP)        ○        
    저전압(UVP)        ○
    과전력(OPP)        ○        
    단락(SCP)        ○
    `, image: '/images/잘만 ECOMAX 83+.jpg'},
    { type: '케이스', name: 'darkFlash DK110', performance: 30, price: 20000, manufacturer:'darkFlash', release:'2022.10',
    detail:`
    제조회사        darkFlash        
    등록년월        2022년 10월
    제품 분류        PC케이스(ATX)        
    케이스 크기        미들타워
    파워포함여부        파워미포함        
    지원파워규격        표준-ATX

    지원보드규격
    표준-ATX        ○        
    Micro-ATX        ○
    Mini-ITX        ○

    내부 확장
    13.3cm베이        1개        
    8.9cm베이        1개
    6.4cm베이        1개        
    저장장치 장착        최대 2개
    PCI 슬롯(수평)        7개

    쿨러 / 튜닝
    쿨링팬        총1개        
    측면        통풍구
    후면        120mm x1

    외부포트
    USB        ○        USB 3.0        ○

    크기
    너비(W)        190mm        
    깊이(D)        344mm
    높이(H)        410mm

    호환성
    파워 위치        상단        
    GPU 장착        285mm
    CPU쿨러 장착        160mm
    `, image: '/images/darkFlash DK110.jpg'},

    { type: 'CPU', name: '인텔 코어 i3-13세대 13100 (랩터레이크)', performance: 30, price: 180000, manufacturer:'인텔', release:'2021.04',
    detail:`
    제조회사        인텔        
    등록년월        2023년 01월
    인텔 CPU종류        코어i3-13세대        
    소켓 구분        인텔(소켓1700)
    출시일        2023 1분기        
    제조 공정        10nm(인텔7)

    사양
    코어 수        4코어        
    쓰레드 수        8쓰레드
    기본 클럭        3.4GHz        
    최대 클럭        4.5GHz
    L2 캐시        5MB        
    L3 캐시        12MB
    연산 체계        64비트        
    버스 속도        DMI4.0 8 GT/s
    PBP/MTP        60~89W        
    PCIe 버전        PCIe5.0, 4.0
    최대 PCIe 레인수        20레인

    메모리 사양
    최대 메모리 크기        128GB        
    메모리 규격        DDR5, DDR4
    메모리 클럭        4800, 3200MHz        
    메모리 채널        2

    그래픽 사양
    내장그래픽        탑재        
    GPU 모델명        인텔 UHD 730
    GPU 코어 속도        1,500MHz

    기술 지원
    하이퍼스레딩        ○
    구성
    패키지 형태        정품        
    쿨러        인텔 기본쿨러 포함
    `, image: '/images/인텔® 코어™ i3-13100 프로세서.jpg'},
    { type: '메인보드', name: 'ASUS PRIME H610M-K D4 인텍앤컴퍼니', performance: 40, price: 100000, manufacturer:'ASUS', release:'2022.01',
    detail:`
    제조회사        ASUS         
    등록년월        2022년 01월

    기본 사양
    제품 분류        인텔 CPU용        
    CPU 소켓        인텔(소켓1700)
    세부 칩셋        인텔 H610        
    CPU 장착수        1개
    폼팩터        M-ATX (23.4x20.3cm)

    메모리
    메모리 종류        DDR4        
    메모리 속도        3200MHz (PC4-25600)
    메모리 슬롯        2개        
    메모리 채널        듀얼
    메모리 용량        최대 64GB

    메모리 기술
    XMP        ○        
    옵테인        ○

    확장슬롯
    VGA 연결        PCIe4.0 x16

    PCIe버전
    PCIe4.0        ○        
    PCIe3.0        ○
    PCIe        ○

    PCIe슬롯
    PCIex16        1개        
    PCIex1        1개

    저장장치인터페이스
    M.2        ○        
    SATA3(6Gb/s)        ○
    M.2        1개        
    SATA3        4개

    M.2 연결
    PCIe        ○       
    NVMe        ○
    SATA        ○

    M.2 폼팩터
    2242        ○        
    2260        ○
    2280        ○
    그래픽 출력

    D-SUB        ○        
    HDMI        ○

    후면단자
    USB 3.0        ○        
    USB 2.0        ○
    RJ-45        ○        
    오디오잭        ○
    PS/2        ○

    USB 3.0        후면 2개        
    USB 2.0        후면 4개
    네트워크
    유선랜 칩셋        Realtek 1Gb        
    유선랜 속도        기가비트
    RJ-45        1개

    오디오
    오디오 칩셋        Realtek        
    아날로그 출력        7.1채널(8ch)

    I/O 헤더
    USB 3.0 헤더        ○       
     USB 2.0 헤더        ○
    RGB 12V 4핀 헤더        ○        
    TPM 헤더        ○
    RGB 4핀        1개        
    시스템팬 4핀        1개
    USB2.0 헤더        1개        
    USB3.0 헤더        1개

    특징
    UEFI        ○
    `, image: '/images/ASUS PRIME H610M-K D4 인텍앤컴퍼니.jpg'},
    { type: '램', name: '삼성전자 DDR4-3200 (8GB) x2', performance: 50, price: 40000, manufacturer:'삼성전자', release:'2020.06',
    detail:`
    제조회사        삼성전자         
    등록년월        2020년 06월
    사용 장치        데스크탑용        
    제품 분류        DDR4
    메모리 규격        DIMM        
    메모리 용량        8GB
    동작클럭(대역폭)        3200MHz (PC4-25600)        
    램개수        1개
    히트싱크        미포함
    `, image: '/images/삼성전자 DDR4-3200 (8GB) x2.jpg'},
    { type: 'SSD', name: 'Western Digital WD BLACK SN770 M.2 NVMe (500GB)', performance: 45, price: 50000, manufacturer:'Western', release:'2022.03',
    detail:`
    제조회사        Western Digital        
    등록년월        2022년 03월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe4.0x4 (64GT/s)        
    프로토콜        NVMe 1.4
    용량        500GB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드

    [성능]
    순차읽기        5,000MB/s        
    순차쓰기        4,000MB/s
    읽기IOPS        460K        
    쓰기IOPS        800K

    지원기능
    TRIM        ○        
    S.M.A.R.T        ○

    부가기능
    전용 S/W        ○

    [환경특성]
    MTBF        175만시간
    TBW        300TB
    A/S기간
    5년        ○        
    제한보증        ○

    쿨링 정보
    NVMe 방열판        방열판 미포함

    [크기/무게]
    가로        80mm        세로        22mm
    두께        2.38mm        무게        5.5g
    `, image: '/images/Western Digital WD BLACK SN770 M.2 NVMe (500GB).jpg'},
    { type: '파워', name: 'AONE 500MX V2', performance: 40, price: 20000, manufacturer:'AONE', release:'2015.06',
    detail:`
    제조회사        AONE        
    등록년월        2015년 06월
    제품 분류        ATX 파워        
    정격출력        200W
    +12V 출력방식        +12V 싱글레일        
    쿨링팬 크기        120mm 팬
    쿨링팬 개수        1개(팬)        
    A/S 보증기간        무상 1년, 유상 2년

    DC 출력
    +3.3V 출력        7A        
    +5V 출력        9A
    +12V 출력        10A        
    -12V 출력        0.3A
    +5Vsb 출력        1.7A

    [커넥터]
    케이블연결        케이블일체형        
    메인전원        24핀(20+4)
    보조전원        4핀 1개        
    PCIe 6핀        1개
    SATA        3개        
    IDE 4핀        3개
    `, image: '/images/AONE 500MX V2.jpg'},
    { type: '케이스', name: 'darkFlash DLM21 RGB MESH 강화유리', performance: 30, price: 60000, manufacturer:'darkFlash', release:'2019.08',
    detail:`
    제조회사        darkFlash ( 제조사 웹사이트 바로가기)        
    등록년월        2019년 08월
    제품 분류        PC케이스(M-ATX)        
    케이스 크기        미니타워
    파워포함여부        파워미포함        
    지원파워규격        표준-ATX

    지원보드규격
    Micro-ATX        ○        
    Mini-ITX        ○

    내부 확장
    8.9cm베이        2개        
    6.4cm베이        2개
    저장장치 장착        최대 4개        
    PCI 슬롯(수평)        4개

    쿨러 / 튜닝
    쿨링팬        총3개        
    LED팬        3개
    전면 패널 타입        메쉬        
    측면 개폐 방식        스윙도어
    측면        강화유리        
    후면        120mm LED x1
    전면        120mm LED x2        
    먼지필터        부분

    외부포트
    USB        ○        
    USB 3.0        ○

    크기
    너비(W)        208mm        
    깊이(D)        376mm
    높이(H)        425mm

    호환성
    파워 장착        210mm        
    파워 위치        하단후면
    GPU 장착        330mm        
    CPU쿨러 장착        160mm
    수랭쿨러 규격        최대2열 지원        
    라디에이터(상단)        최대240mm
    라디에이터(후면)        최대120mm
    컨트롤러 지원
    RGB 컨트롤        ○
    `, image: '/images/darkFlash DLM21 RGB MESH 강화유리.jpg'},
//사무용


    { type: 'CPU', name: '인텔 코어i3-13세대 13100F (랩터레이크)', performance: 28, price: 149000, manufacturer:'인텔', release:'2023.01',
    detail:`
    제조회사        인텔        
    등록년월        2023년 01월
    인텔 CPU종류        코어i3-13세대        
    소켓 구분        인텔(소켓1700)
    출시일        2023 1분기        
    제조 공정        10nm(인텔7)
    PBP/MTP        58~89W        
    PCIe 버전        PCIe5.0, 4.0
    최대 PCIe 레인수        20레인

    사양
    코어 수        4코어        
    쓰레드 수        8쓰레드
    기본 클럭        3.4GHz        
    최대 클럭        4.5GHz
    L2 캐시        5MB        
    L3 캐시        12MB
    연산 체계        64비트        
    버스 속도        DMI4.0 8 GT/s

    메모리 사양
    최대 메모리 크기        128GB        
    메모리 규격        DDR5, DDR4
    메모리 클럭        4800, 3200MHz        
    메모리 채널        2

    그래픽 사양
    내장그래픽        미탑재

    기술 지원
    하이퍼스레딩        O
    구성
    패키지 형태        벌크        
    쿨러        미포함
    `, image: '/images/인텔 코어i3-13세대 13100F (랩터레이크.jpg'},
    { type: 'gpu', name: 'MSI 지포스 RTX 3050 벤투스 2X XS OC D6 8GB', performance: 75, price: 310000, manufacturer:'MSI', release:'2023.09',
    detail:`
    제조회사        MSI        
    등록년월        2023년 09월
    칩셋 사양
    칩셋 제조사        NVIDIA        
    제품 시리즈        지포스 RTX 30
    GPU 제조 공정        8nm        
    NVIDIA 칩셋        RTX 3050
    부스트클럭        1807MHz        
    쿠다 프로세서        2560개
    인터페이스        PCIe4.0x16(at x8)

    메모리 사양
    메모리 종류        GDDR6(DDR6)       
    메모리 클럭        14000MHz
    메모리 용량        8GB        
    메모리 버스        128-bit

    그래픽 출력
    DVI        1개        
    HDMI        1개
    DisplayPort        1개        
    모니터 지원        최대 모니터 3개

    부가기능
    제로팬(0-dB기술)        O        
    8K 지원        O
    4K 지원        O        
    HDR 지원        O
    HDCP 2.3        O

    전력 관련
    사용전력        115W        
    권장 파워용량        정격파워 500W 이상
    전원 포트        6핀 x1

    냉각방식
    방열판        O        
    히트파이프        O
    팬쿨러        O

    제품 외형
    팬 개수        2개 팬        
    가로(길이)        205mm
    두께        45mm

    추가 구성
    백플레이트        O
    `, image: '/images/MSI 지포스 RTX 3050 벤투스 2X XS OC D6 8GB.jpg'},
    { type: '메인보드', name: 'ASUS PRIME H610M-K D4 인텍앤컴퍼니', performance: 50, price: 97000, manufacturer:'ASUS', release:'2022.01',
    detail:`
    제조회사        ASUS        
    등록년월        2022년 01월

    기본 사양
    제품 분류        
    인텔 CPU용        
    CPU 소켓        인텔(소켓1700)
    세부 칩셋        인텔 H610        
    CPU 장착수        1개
    폼팩터        M-ATX (23.4x20.3cm)

    메모리
    메모리 종류        DDR4        
    메모리 속도        3200MHz (PC4-25600)
    메모리 슬롯        2개        
    메모리 채널        듀얼
    메모리 용량        최대 64GB

    메모리 기술
    XMP        O        
    옵테인        O

    확장슬롯
    VGA 연결        PCIe4.0 x16

    PCIe버전
    PCIe4.0        O        
    PCIe3.0        O
    PCIe        O
    PCIe슬롯
    PCIex16        1개        
    PCIex1        1개

    저장장치인터페이스
    M.2        O        
    SATA3(6Gb/s)        O
    M.2        1개        
    SATA3        4개
    USB 3.0        후면 2개        
    USB 2.0        후면 4개
    RGB 4핀        1개        
    시스템팬 4핀        1개
    USB2.0 헤더        1개        
    USB3.0 헤더        1개

    M.2 연결
    PCIe        O        
    NVMe        O
    SATA        O

    M.2 폼팩터
    2242        O        
    2260        O
    2280        O

    그래픽 출력
    D-SUB        O        
    HDMI        O

    후면단자
    USB 3.0        O        
    USB 2.0        O
    RJ-45        O        
    오디오잭        O
    PS/2        O

    네트워크
    유선랜 칩셋        Realtek 1Gb        
    유선랜 속도        기가비트
    RJ-45        1개

    오디오
    오디오 칩셋        Realtek        
    아날로그 출력        7.1채널(8ch)

    I/O 헤더
    USB 3.0 헤더        O        
    USB 2.0 헤더        O
    RGB 12V 4핀 헤더        O        
    TPM 헤더        O

    특징
    UEFI        O
    `, image: '/images/ASUS PRIME H610M-K D4 인텍앤컴퍼니.jpg'},
    { type: 'SSD', name: '삼성전자 PM9A1 M.2 NVMe 병행수입 (1TB)', performance: 100, price: 110000, manufacturer:'삼성전자', release:'2021.02',
    detail:`
    제조회사        삼성전자        
    등록년월        2021년 02월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe4.0x4 (64GT/s)        
    프로토콜        NVMe 1.3
    용량        1TB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드        
    RAM 탑재        DRAM 탑재
    RAM 타입        DDR4 1GB        
    컨트롤러        삼성
    게임기 호환        PS5 호환        
    TBW        600TB

    [성능]
    순차읽기        7,000MB/s        
    순차쓰기        5,100MB/s
    읽기IOPS        1,000K        
    쓰기IOPS        850K

    지원기능
    TRIM        O        
    SLC캐싱        O
    S.M.A.R.T        O

    부가기능
    AES 암호화        O

    [환경특성]
    MTBF        150만시간

    쿨링 정보
    NVMe 방열판        방열판 미포함

    [크기/무게]
    가로        80mm        
    세로        22mm
    두께        2.38mm        
    무게        9g
    `, image: '/images/삼성전자 PM9A1 M.2 NVMe 병행수입 (1TB).jpg'},
    { type: '파워', name: '마이크로닉스 Classic II 풀체인지 500W 80PLUS BRONZE 230V EU', performance: 50, price: 52000, manufacturer:'마이크로닉스', release:'2021.07',
    detail:`
    제조회사        마이크로닉스        
    등록년월        2021년 07월
    제품 분류        ATX 파워        
    정격출력        500W
    80PLUS인증        80 PLUS 브론즈        
    ETA인증        BRONZE
    LAMBDA인증        STANDARD++        
    +12V 출력방식        +12V 싱글레일
    +12V 가용률        100%        
    PFC회로        액티브PFC
    PF(역률)        99%        
    쿨링팬 크기        120mm 팬
    쿨링팬 개수        1개(팬)        
    베어링        LLS(Sleeve)
    깊이        140mm        
    A/S 보증기간        무상 7년

    DC 출력
    +3.3V 출력        20A        
    +5V 출력        20A
    +12V 출력        41.6A        
    -12V 출력        0.3A
    +5Vsb 출력        3.0A

    [커넥터]
    케이블연결        케이블일체형        
    메인전원        24핀(20+4)
    보조전원        8+4핀 1개        
    PCIe 8핀(6+2)        2개
    SATA        6개        
    IDE 4핀        3개

    부가기능
    팬리스모드        O        
    자동 팬 조절        O
    대기전력 1W 미만        O        
    플랫케이블        O

    내부설계
    105도 콘덴서        O        
    DC to DC 설계        O

    보호회로
    과전압(OVP)        O        
    저전압(UVP)        O
    과전력(OPP)        O        
    과열(OTP/OHP)        O
    단락(SCP)        O
    `, image: '/images/마이크로닉스 Classic II 풀체인지 500W 80PLUS BRONZE 230V EU.jpg'},
    { type: '케이스', name: '3RSYS R200 (블랙)', performance: 40, price: 36000, manufacturer:'3RSYS', release:'2021.11',
    detail:`
    제조회사        3RSYS        
    등록년월        2021년 11월
    제품 분류        PC케이스(ATX)        
    케이스 크기        미들타워
    파워포함여부        파워미포함        
    지원파워규격        표준-ATX
    높이(H)        456mm
    
    지원보드규격
    표준-ATX        O        
    Micro-ATX        O
    표준-ITX        O

    내부 확장
    8.9cm베이        2개        
    6.4cm베이        2개
    저장장치 장착        최대 4개        
    PCI 슬롯(수평)        7개

    쿨러 / 튜닝
    쿨링팬        총6개        
    LED팬        4개
    측면        강화유리        
    후면        120mm LED x1
    전면        120mm LED x3        
    상단        120mm x2
    먼지필터        부분

    외부포트
    USB        O        
    USB 3.0        O

    크기
    너비(W)        200mm        
    깊이(D)        375mm

    호환성
    파워 장착        185mm        
    파워 위치        하단후면
    GPU 장착        320mm        
    CPU쿨러 장착        160mm
    수랭쿨러 규격        최대2열 지원        
    라디에이터(전면)        최대240mm
    라디에이터(후면)        최대120mm
            `, image: '/images/3RSYS R200 (블랙).jpg'},
    { type: '쿨러', name: '3RSYS Socoool RC340', performance: 50, price: 19000, manufacturer:'3RSYS', release:'2023.05',
    detail:`
    제조회사        3RSYS        
    등록년월        2023년 05월
    냉각 방식        공랭        
    TDP        180W
    A/S기간        3년        
    가로        120mm
    높이        155mm        
    히트파이프        4개

    인텔 소켓
    LGA1700        O        
    LGA1200        O
    LGA115x        O

    AMD 소켓
    AM5        O        
    AM4        O

    [쿨링팬]
    팬 크기        120mm        
    팬 개수        1개
    팬 두께        25T        
    팬 커넥터        4핀
    베어링        Hydraulic        
    최대 팬속도        2100 RPM
    최대 풍량        61.5 CFM        
    최대 팬소음        30.1dBA

    부가기능
    PWM 지원        O
    `, image: '/images/3RSYS Socoool RC340.jpg'},

    { type: 'CPU', name: 'AMD 라이젠5-4세대 5600X (버미어)', performance: 45, price: 190000, manufacturer:'AMD', release:'2020.11',
    detail:`
    제조회사        AMD        
    등록년월        2020년 11월
    AMD CPU종류        라이젠5-4세대        
    소켓 구분        AMD(소켓AM4)
    세대 구분        4세대(Zen3)        
    출시일        2020 4분기
    제조 공정        7nm        
    PCIe 버전        PCIe4.0
    시네벤치R23(싱글)        1,502점        
    시네벤치R23(멀티)        11073

    사양
    코어 수        6코어        
    쓰레드 수        12쓰레드
    기본 클럭        3.7GHz        
    최대 클럭        4.6GHz
    L2 캐시        3MB        
    L3 캐시        32MB
    TDP        65W

    메모리 사양
    메모리 규격        DDR4        
    메모리 클럭        3200MHz

    그래픽 사양
    내장그래픽        미탑재

    기술 지원
    StoreMI        O        
    Ryzen Master        O
    VR Ready 프리미엄        O

    구성
    패키지 형태        멀티팩(정품)        
    쿨러        Wraith Stealth 포함
    `, image: '/images/AMD 라이젠5-4세대 5600X (버미어).jpg'},
    { type: 'gpu', name: 'GIGABYTE 지포스 RTX 4060 WINDFORCE OC D6 8GB 피씨디렉트', performance: 85, price: 425000, manufacturer:'GIGABYTE', release:'2023.06',
    detail:`
    제조회사        GIGABYTE        
    등록년월        2023년 06월

    칩셋 사양
    칩셋 제조사        NVIDIA        
    제품 시리즈        지포스 RTX 40
    GPU 제조 공정        4nm        
    NVIDIA 칩셋        RTX 4060
    부스트클럭        2475MHz        
    쿠다 프로세서        3072개
    인터페이스        PCIe4.0x16(at x8)

    메모리 사양
    메모리 종류        GDDR6(DDR6)        
    메모리 클럭        17000MHz
    메모리 용량        8GB        
    메모리 버스        128-bit

    그래픽 출력
    HDMI        2개        
    DisplayPort        2개
    모니터 지원        최대 모니터 4개

    부가기능
    8K 지원        O        
    4K 지원        O
    HDR 지원        O        
    HDCP 2.3        O

    전력 관련
    권장 파워용량        정격파워 450W 이상        
    전원 포트        8핀 x1

    냉각방식
    방열판        O        
    히트파이프        O
    팬쿨러        O

    제품 외형
    팬 개수        2개 팬        
    가로(길이)        192mm
    두께        41mm

    추가 구성
    백플레이트        O        
    LED 라이트        O

    LED 위치
    측면 LED        O
    `, image: '/images/GIGABYTE 지포스 RTX 4060 WINDFORCE OC D6 8GB 피씨디렉트.jpg'},
    { type: '메인보드', name: 'GIGABYTE B550M AORUS ELITE 제이씨현', performance: 55, price: 126000, manufacturer:'GIGABYTE', release:'2020.06',
    detail:`
    제조회사        GIGABYTE        
    등록년월        2020년 06월

    기본 사양
    제품 분류        AMD CPU용        
    CPU 소켓        AMD(소켓AM4)
    세부 칩셋        AMD B550        
    CPU 장착수        1개
    폼팩터        M-ATX (24.4x24.4cm)        
    전원부        5+3페이즈

    메모리
    메모리 종류        DDR4        
    메모리 속도        4733MHz (PC4-37800)
    메모리 슬롯        4개        
    메모리 채널        듀얼
    메모리 용량        최대 128GB

    메모리 기술
    XMP        O

    확장슬롯
    VGA 연결        PCIe4.0 x16

    PCIe버전
    PCIe4.0        O        
    PCIe3.0        O

    PCIe슬롯
    PCIex16        2개        
    PCIex1        1개
    저장장치        저장장치        
    M.2        2개
    SATA3        4개        
    USB 3.0        후면 4개
    USB 2.0        후면 4개        
    RGB 4핀        2개
    ARGB 3핀        2개        
    시스템팬 4핀        2개
    USB2.0 헤더        1개        
    USB3.0 헤더        1개
    LED 시스템        RGB FUSION

    M.2 연결
    PCIe        O        
    NVMe        O
    SATA        O

    M.2 폼팩터
    2242        O        
    2260        O
    2280        O        
    22110        O

    RAID 지원
    SATA RAID        O

    그래픽 출력
    DVI        O        
    HDMI        O

    후면단자
    USB 3.0        O        
    USB 2.0        O
    RJ-45        O        
    오디오잭        O
    PS/2        O

    네트워크
    유선랜 칩셋        Realtek        
    유선랜 속도        기가비트
    RJ-45        1개

    오디오
    오디오 칩셋        Realtek ALC887        
    아날로그 출력        5.1채널(6ch)

    I/O 헤더
    USB 3.0 헤더        O        
    USB 2.0 헤더        O
    RGB 12V 4핀 헤더        O        
    ARGB 5V 3핀 헤더        O
    TPM 헤더        O

    특징
    UEFI        O
    `, image: '/images/GIGABYTE B550M AORUS ELITE 제이씨현.jpg'},
    { type: '램', name: '마이크론 Crucial DDR4-3200 CL22 대원씨티에스 (8GB)x2', performance: 50, price: 54000, manufacturer:'마이크론', release:'2023.05',
    detail:`
    제조회사        마이크론        
    등록년월        2023년 05월
    사용 장치        데스크탑용        
    제품 분류        DDR4
    메모리 규격        DIMM        
    메모리 용량        8GB
    동작클럭(대역폭)        3200MHz (PC4-25600)        
    램타이밍        CL22
    동작전압        1.20V        
    램개수        1개
    히트싱크        미포함
    `, image: '/images/마이크론 Crucial DDR4-3200 CL22 (8GB) x 2.jpg'},
    { type: 'SSD', name: 'SK하이닉스 Gold P31 M.2 NVMe (1TB)', performance: 100, price: 110000, manufacturer:'SK하이닉스', release:'2021.01',
    detail:`
    제조회사        SK하이닉스        
    등록년월        2021년 01월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe3.0x4 (32GT/s)        
    프로토콜        NVMe 1.3
    용량        1TB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드        
    RAM 탑재        DRAM 탑재
    RAM 타입        DDR4        
    컨트롤러        SK hynix Cepheus

    [성능]
    순차읽기        3,500MB/s        
    순차쓰기        3,200MB/s
    읽기IOPS        570K        
    쓰기IOPS        600K

    지원기능
    TRIM        O        
    SLC캐싱        O
    S.M.A.R.T        O

    부가기능
    전용 S/W        O

    [환경특성]
    MTBF        150만시간
    TBW        750TB

    A/S기간
    5년        O

    쿨링 정보
    NVMe 방열판        방열판 미포함

    [크기/무게]
    가로        80mm        
    세로        22mm
    두께        2.3mm        
    무게        7g
    `, image: '/images/SK하이닉스 Gold P31 M.2 NVMe (1TB).jpg'},
    { type: '파워', name: '쿨러마스터 MWE 600 BRONZE V2 230V', performance: 100, price: 55000, manufacturer:'쿨러마스터', release:'2020.10',
    detail:`
    제조회사        쿨러마스터        
    등록년월        2020년 10월
    제품 분류        ATX 파워        
    정격출력        600W
    80PLUS인증        80 PLUS 브론즈        
    +12V 출력방식        +12V 싱글레일
    +12V 가용률        98%        
    PFC회로        액티브PFC
    쿨링팬 크기        120mm 팬        
    쿨링팬 개수        1개(팬)
    베어링        HDB/HYB        
    깊이        140mm
    A/S 보증기간        무상 5년

    DC 출력
    +3.3V 출력        18A        
    +5V 출력        18A
    +12V 출력        49A        
    -12V 출력        0.3A
    +5Vsb 출력        3.0A

    [커넥터]
    케이블연결        케이블일체형        
    메인전원        24핀
    보조전원        8+4+4핀 1개        
    PCIe 8핀(6+2)        4개
    SATA        6개        
    IDE 4핀        3개

    부가기능
    플랫케이블        O

    내부설계
    DC to DC 설계        O        
    LLC공진형컨버터        O

    보호회로
    과전압(OVP)        O        
    저전압(UVP)        O
    과전력(OPP)        O        
    과열(OTP/OHP)        O
    단락(SCP)        O
    `, image: '/images/쿨러마스터 MWE 600 BRONZE V2 230V.jpg'},
    { type: '케이스', name: '마이크로닉스 Master M60 메쉬 (블랙)', performance: 40, price: 44000, manufacturer:'마이크로닉스', release:'2020.01',
    detail:`
    제조회사        마이크로닉스        
    등록년월        2020년 01월
    제품 분류        PC케이스(ATX)        
    케이스 크기        미들타워
    파워포함여부        파워미포함        
    지원파워규격        표준-ATX
    높이(H)        461mm

    지원보드규격
    표준-ATX        O        
    Micro-ATX        O
    Mini-ITX        O

    내부 확장
    8.9cm베이        2개        
    6.4cm베이        3개
    저장장치 장착        최대 5개        
    PCI 슬롯(수평)        7개

    쿨러 / 튜닝
    쿨링팬        총6개        
    LED팬        4개
    전면 패널 타입        메쉬        
    측면 개폐 방식        스윙도어
    측면        강화유리        
    후면        120mm LED x1
    전면        120mm LED x3        
    상단        120mm x2

    외부포트
    USB        O        
    USB 3.0        O

    크기
    너비(W)        221mm        
    깊이(D)        390mm

    호환성
    파워 장착        190mm        
    파워 위치        하단후면
    GPU 장착        325mm        
    CPU쿨러 장착        175mm
    수랭쿨러 규격        최대2열 지원        
    라디에이터(상단)        최대240mm
    라디에이터(전면)        최대360mm, 280mm

    컨트롤러 지원
    RGB 컨트롤        O
    `, image: '/images/마이크로닉스 Master M60 메쉬 (블랙).jpg'},
    { type: '쿨러', name: 'DEEPCOOL AG400', performance: 50, price: 23000, manufacturer:'DEEPCOOL', release:'2022.06',
    detail:`
    제조회사        DEEPCOOL        
    등록년월        2022년 06월
    냉각 방식        공랭        
    재질        니켈+알루미늄
    TDP        220W        
    A/S기간        1년
    가로        125mm        
    높이        150mm
    무게        614g        
    히트파이프        6mm 4개

    인텔 소켓
    LGA1700        O        LGA1200        O
    LGA115x        O

    AMD 소켓
    AM5        O        AM4        O

    [쿨링팬]
    팬 크기        120mm        
    팬 개수        1개
    팬 두께        25T        
    팬 커넥터        4핀
    베어링        Hydro        
    최대 팬속도        2000 RPM
    최대 풍량        75.89 CFM        
    풍압(정압)        2.53mmH₂O
    최대 팬소음        31.6dBA        
    팬수명        40,000시간

    부가기능
    PWM 지원        O
    `, image: '/images/DEEPCOOL AG400.jpg'},

    { type: 'CPU', name: '인텔 코어i5-13세대 13400F (랩터레이크)', performance: 50, price: 248000, manufacturer:'인텔', release:'2023.01',
    detail:`
    제조회사        인텔        
    등록년월        2023년 01월
    인텔 CPU종류        코어i5-13세대        
    소켓 구분        인텔(소켓1700)
    출시일        2023 1분기        
    제조 공정        10nm(인텔7)
    PBP/MTP        65~148W        
    PCIe 버전        PCIe5.0, 4.0
    최대 PCIe 레인수        20레인        
    시네벤치R23(싱글)        1789
    시네벤치R23(멀티)        14621

    사양
    코어 수        6+4코어        
    쓰레드 수        12+4쓰레드
    기본 클럭        2.5GHz        
    최대 클럭        4.6GHz
    L2 캐시        9.5MB        
    L3 캐시        20MB
    연산 체계        64비트        
    버스 속도        DMI4.0 8 GT/s

    메모리 사양
    최대 메모리 크기        128GB        
    메모리 규격        DDR5, DDR4
    메모리 클럭        4800, 3200MHz        
    메모리 채널        2

    그래픽 사양
    내장그래픽        
    미탑재

    기술 지원
    하이퍼스레딩        O

    구성
    패키지 형태        벌크        
    쿨러        미포함
    `, image: '/images/인텔 코어i5-13세대 13400F (랩터레이크).jpg'},
    { type: 'gpu', name: 'ZOTAC GAMING 지포스 RTX 4060 Ti TWIN Edge D6 8GB', performance: 95, price: 570000, manufacturer:'ZOTAC', release:'2023.05',
    detail:`
    제조회사        ZOTAC        
    등록년월        2023년 05월

    칩셋 사양
    칩셋 제조사        NVIDIA        
    제품 시리즈        지포스 RTX 40
    GPU 제조 공정        4nm        
    NVIDIA 칩셋        RTX 4060 Ti
    부스트클럭        2535MHz        
    쿠다 프로세서        4352개
    인터페이스        PCIe4.0x16(at x8)

    메모리 사양
    메모리 종류        GDDR6(DDR6)        
    메모리 클럭        18000MHz
    메모리 용량        8GB        
    메모리 버스        128-bit

    그래픽 출력
    HDMI        1개        
    DisplayPort        3개
    모니터 지원        최대 모니터 4개

    부가기능
    제로팬(0-dB기술)        O

    전력 관련
    사용전력        160W        
    권장 파워용량        정격파워 500W 이상
    전원 포트        8핀 x1        
    전원부        5+1페이즈

    냉각방식
    방열판        O        
    히트파이프        O
    팬쿨러        O

    제품 외형
    팬 개수        2개 팬        
    가로(길이)        225.5mm
    두께        40.1mm

    추가 구성
    백플레이트        O        
    LED 라이트        O

    LED 위치
    측면 LED        O
    `, image: '/images/ZOTAC GAMING 지포스 RTX 4060 Ti TWIN Edge D6 8GB.jpg'},
    { type: '메인보드', name: 'MSI PRO H610M-C EX', performance: 50, price: 117000, manufacturer:'MSI', release:'2022.03',
    detail:`
    제조회사        MSI        
    등록년월        2022년 03월

    기본 사양
    제품 분류        인텔 CPU용        
    CPU 소켓        인텔(소켓1700)
    세부 칩셋        인텔 H610        
    CPU 장착수        1개
    폼팩터        M-ATX (24.4x22.0cm)

    메모리
    메모리 종류        DDR5        
    메모리 속도        5600MHz (PC5-44800)
    메모리 슬롯        2개        
    메모리 채널        듀얼
    메모리 용량        최대 96GB

    확장슬롯
    VGA 연결        PCIe4.0 x16

    PCIe버전
    PCIe4.0        O        
    PCIe3.0        O
    PCI        O

    PCIe슬롯
    PCIex16        1개        
    PCIex1        2개
    PCI        1개

    저장장치인터페이스
    M.2        O        
    SATA3(6Gb/s)        O
    M.2        1개        
    SATA3        4개
    USB 3.0        후면 2개        
    USB 2.0        후면 2개
    시스템팬 4핀        1개        
    USB2.0 헤더        2개
    USB3.0 헤더        1개

    M.2 연결
    PCIe        O        
    NVMe        O
    SATA        O

    M.2 폼팩터
    2242        O        
    2260        O
    2280        O

    그래픽 출력
    D-SUB        O        
    DVI        O
    HDMI        O        
    DP        O

    후면단자
    USB 3.0        O        
    USB 2.0        O
    RJ-45        O        
    오디오잭        O
    PS/2        O        
    시리얼포트        O

    네트워크
    유선랜 칩셋        Realtek RTL8111H        
    유선랜 속도        기가비트
    RJ-45        1개

    오디오
    오디오 칩셋        Realtek ALC897        
    아날로그 출력        7.1채널(8ch)

    I/O 헤더
    USB 3.0 헤더        O       
     USB 2.0 헤더        O
    TPM 헤더        O

    특징
    UEFI        O
    `, image: '/images/MSI PRO H610M-C EX.jpg'},
    { type: '램', name: '삼성전자 DDR5-5600 (16GB)x2', performance: 100, price: 122000, manufacturer:'삼성전자', release:'2023.02',
    detail:`
    제조회사        삼성전자        
    등록년월        2023년 02월
    사용 장치        데스크탑용        
    제품 분류        DDR5
    메모리 규격        DIMM        
    메모리 용량        16GB
    동작클럭(대역폭)        5600MHz (PC5-44800)        
    램개수        1개
    히트싱크        미포함
    `, image: '/images/삼성전자 DDR5-5600 (16GB)x2.jpg'},
    { type: 'SSD', name: '삼성전자 980 PRO M.2 NVMe (1TB)', performance: 100, price: 170000, manufacturer:'삼성전자', release:'2020.09',
    detail:`
    제조회사        삼성전자        
    등록년월        2020년 09월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe4.0x4 (64GT/s)        
    프로토콜        NVMe 1.3c
    용량        1TB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드        
    RAM 탑재        DRAM 탑재
    RAM 타입        DDR4 1GB        
    컨트롤러        삼성
    게임기 호환        PS5 호환        
    TBW        600TB

    [성능]
    순차읽기        7,000MB/s        
    순차쓰기        5,000MB/s
    읽기IOPS        1,000K        
    쓰기IOPS        1,000K

    지원기능
    TRIM        O        
    GC        O
    SLC캐싱        O        
    S.M.A.R.T        O
    DEVSLP        O

    부가기능
    AES 암호화        O        
    전용 S/W        O

    소프트웨어 지원
    마이그레이션        O        
    관리기능        O

    [환경특성]
    MTBF        150만시간

    A/S기간
    5년        O

    쿨링 정보
    NVMe 방열판        방열판 미포함

    [크기/무게]
    가로        80.15mm        
    세로        22.15mm
    두께        2.38mm        
    무게        9g
    `, image: '/images/삼성전자 980 PRO M.2 NVMe (1TB).jpg'},
    { type: '파워', name: '마이크로닉스 Classic II 풀체인지 700W 80PLUS BRONZE 230V EU', performance: 130, price: 81000, manufacturer:'마이크로닉스', release:'2021.04',
    detail:`
    제조회사        마이크로닉스        
    등록년월        2021년 04월
    제품 분류        ATX 파워        
    정격출력        700W
    80PLUS인증        80 PLUS 브론즈        
    ETA인증        BRONZE
    LAMBDA인증        STANDARD        
    전압변동        ±0.3%
    +12V 출력방식        +12V 싱글레일        
    +12V 가용률        100%
    PFC회로        액티브PFC        
    PF(역률)        99%
    쿨링팬 크기        120mm 팬        
    쿨링팬 개수        1개(팬)
    베어링        LLS(Sleeve)        
    깊이        140mm
    A/S 보증기간        무상 7년

    DC 출력
    +3.3V 출력        22A        
    +5V 출력        22A
    +12V 출력        58.3A        
    -12V 출력        0.3A
    +5Vsb 출력        3.0A

    [커넥터]
    케이블연결        케이블일체형        
    메인전원        24핀(20+4)
    보조전원        8+4+4핀 1개        
    PCIe 16핀(12+4)        12VHPWR 1개
    PCIe 8핀(6+2)        2개        
    SATA        6개
    IDE 4핀        4개

    부가기능
    팬리스모드        O        
    자동 팬 조절        O
    대기전력 1W 미만        O        
    플랫케이블        O

    내부설계
    105도 콘덴서        O        
    DC to DC 설계        O

    보호회로
    과전압(OVP)        O        
    저전압(UVP)        O
    과전력(OPP)        O        
    과열(OTP/OHP)        O
    단락(SCP)        O
            `, image: '/images/마이크로닉스 Classic II 풀체인지 700W 80PLUS BRONZE 230V EU.jpg'},
    { type: '케이스', name: '앱코 NCORE G30 트루포스 (블랙)', performance: 40, price: 47000, manufacturer:'앱코', release:'2021.07',
    detail:`
    제조회사        앱코        
    등록년월        2021년 07월
    제품 분류        PC케이스(ATX)        
    케이스 크기        미들타워
    파워포함여부        파워미포함        
    지원파워규격        표준-ATX
    높이(H)        485mm
    
    지원보드규격
    표준-ATX        O        
    Micro-ATX        O
    Mini-ITX        O

    내부 확장
    8.9cm베이        1개        
    6.4cm베이        1개
    저장장치 장착        최대 2개        
    PCI 슬롯(수평)        7개

    쿨러 / 튜닝
    쿨링팬        총6개        
    LED팬        4개
    전면 패널 타입        메쉬        
    측면        강화유리
    후면        120mm LED x1        
    전면        120mm LED x3
    상단        120mm x2

    외부포트
    USB        O        
    USB 3.0        O

    크기
    너비(W)        225mm        
    깊이(D)        385mm

    호환성
    파워 장착        345mm        
    파워 위치        하단후면
    GPU 장착        340mm        
    CPU쿨러 장착        175mm
    수랭쿨러 규격        최대3열 지원        
    라디에이터(상단)        최대280mm, 240mm
    라디에이터(전면)        최대360mm, 280mm        
    라디에이터(후면)        최대120mm
    `, image: '/images/앱코 NCORE G30 트루포스 (블랙).png'},
    { type: '쿨러', name: '앱코 타이폰 120X5', performance: 60, price: 31000, manufacturer:'앱코', release:'2022.07',
    detail:`
    제조회사        앱코        
    등록년월        2022년 07월
    냉각 방식        공랭        
    TDP        200W
    A/S기간        2년        
    가로        122mm
    높이        154mm        
    히트파이프        5개
    [구성품/기타]
    인텔 소켓
    LGA1700        O        
    LGA1200        O
    LGA115x        O        
    LGA1366        O

    AMD 소켓
    AM5        O        
    AM4        O
    FMx/AMx(AM1/4외)        O

    [쿨링팬]
    팬 크기        120mm        
    팬 개수        1개
    팬 두께        25T        
    팬 커넥터        4핀
    베어링        Hydro        
    최대 팬속도        1700 RPM
    최대 풍량        66 CFM        
    풍압(정압)        2.22mmH₂O
    최대 팬소음        29.7dBA        
    팬수명        70,000시간
    부가기능
    PWM 지원        O
    `, image: '/images/앱코 타이폰 120X5.jpg'},
    //일상용


    { type: 'gpu', name: 'ZOTAC GAMING 지포스 RTX 3070 Ti D6X 8GB', performance: 110, price: 860000, manufacturer:'ZOTAC', release:'2023.01',
    detail:`
    제조회사        ZOTAC        
    등록년월        2023년 01월

    칩셋 사양
    칩셋 제조사        NVIDIA        
    제품 시리즈        지포스 RTX 30
    GPU 제조 공정        8nm        
    NVIDIA 칩셋        RTX 3070 Ti
    부스트클럭        1770MHz        
    쿠다 프로세서        6144개
    인터페이스        PCIe4.0x16

    메모리 사양
    메모리 종류        GDDR6X(DDR6X)        
    메모리 클럭        19000MHz
    메모리 용량        8GB        
    메모리 버스        256-bit

    그래픽 출력
    HDMI        1개        
    DisplayPort        3개

    부가기능
    제로팬(0-dB기술)        O        
    8K 지원        O
    4K 지원        O        
    HDR 지원        O
    HDCP 2.3        O

    전력 관련
    사용전력        최대 320W        
    권장 파워용량        정격파워 750W 이상
    전원 포트        8핀 x2

    냉각방식
    방열판        O        
    히트파이프        O
    팬쿨러        O

    제품 외형
    팬 개수        3개 팬        
    가로(길이)        317.6mm
    두께        58.8mm
    추가 구성
    백플레이트        O        
    LED 라이트        O

    LED 위치
    후면 LED        O        
    측면 LED        O
    `, image: '/images/ZOTAC GAMING 지포스 RTX 3070 Ti D6X 8GB.png'},
    { type: '메인보드', name: 'ASUS TUF Gaming B550-PLUS STCOM', performance: 100, price: 240000, manufacturer:'asus', release:'2020.06',
    detail:`
    제조회사        ASUS        
    등록년월        2020년 06월

    기본 사양
    제품 분류        AMD CPU용        
    CPU 소켓        AMD(소켓AM4)
    세부 칩셋        AMD B550        
    CPU 장착수        1개
    폼팩터        ATX (30.5x24.4cm)        
    전원부        8+2페이즈
    Vcore단일출력        페이즈당50A

    메모리
    메모리 종류        DDR4        
    메모리 속도        4800MHz (PC4-38400)
    메모리 슬롯        4개        
    메모리 채널        듀얼
    메모리 용량        최대 128GB

    확장슬롯
    VGA 연결        PCIe4.0 x16
    
    PCIe버전
    PCIe4.0        O        
    PCIe3.0        O

    PCIe슬롯
    PCIex16        2개        
    PCIex1        3개

    멀티 GPU
    CrossFire X        O

    저장장치        
    M.2        2개
    SATA3        6개        
    USB 3.1        후면 2개
    USB 3.0        후면 4개        
    USB 2.0        후면 2개
    RGB 4핀        2개        
    ARGB 3핀        1개
    시스템팬 4핀        3개        
    USB2.0 헤더        2개
    USB3.0 헤더        1개

    LED 시스템        AURA SYNC

    M.2 연결
    PCIe        O        
    NVMe        O
    SATA        O

    M.2 폼팩터
    2242        O        
    2260        O
    2280        O        
    22110        O

    RAID 지원
    SATA RAID        O

    그래픽 출력
    HDMI        O        
    DP        O

    후면단자
    USB 3.1        O        
    USB 3.0        O
    USB 2.0        O        
    RJ-45        O
    S/PDIF        O        
    오디오잭        O

    USB 타입
    Type-C (10Gbps)        O        
    Type-A (10Gbps)        O

    네트워크
    유선랜 칩셋        Realtek RTL8125B        
    유선랜 속도        2.5기가비트
    RJ-45        1개

    오디오
    오디오 칩셋        Realtek ALC S1200A        
    아날로그 출력        7.1채널(8ch)

    I/O 헤더
    썬더볼트 헤더        O        
    USB 3.0 헤더        O
    USB 2.0 헤더        O        
    RGB 12V 4핀 헤더        O
    ARGB 5V 3핀 헤더        O       
    TPM 헤더        O

    특징
    DrMOS        O        
    M.2 히트싱크        O
    LED 라이트        O        
    UEFI        O

    LED 위치
    내장형(온보드) LED        O        
    후면 LED        O
    `, image: '/images/ASUS TUF Gaming B550-PLUS STCOM.png'},
    { type: '램', name: '삼성전자 DDR4-3200 (16GB)x2', performance: 90, price: 94000, manufacturer:'삼성전자', release:'2020.07',
    detail:`
    제조회사        삼성전자        
    등록년월        2020년 07월
    사용 장치        데스크탑용        
    제품 분류        DDR4
    메모리 규격        DIMM        
    메모리 용량        16GB
    동작클럭(대역폭)        3200MHz (PC4-25600)        
    램개수        1개
    히트싱크        미포함
    `, image: '/images/삼성전자 DDR4-3200 (8GB) x2.jpg'},
    { type: 'SSD', name: 'HP EX950 M.2 2280(512)', performance: 50, price: 62100, manufacturer:'HP', release:'2019.08',
    detail:`
    제조회사        HP        
    등록년월        2019년 08월
    
    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe3.0x4 (32GT/s)        
    프로토콜        NVMe 1.3
    용량        512GB        
    낸드 구조        3D낸드
    RAM 탑재        DRAM 탑재        
    RAM 타입        확인요망

    [성능]
    순차읽기        3,500MB/s        
    순차쓰기        2,250MB/s
    읽기IOPS        390K        
    쓰기IOPS        370K

    [환경특성]
    MTBF        200만시간
    TBW        320TB

    A/S기간
    5년        O

    쿨링 정보
    NVMe 방열판        방열판 미포함

    [크기/무게]
    가로        80mm        
    세로        22mm
    두께        3.8mm        
    무게        최대 5.4g
    `, image: '/images/HP EX950 M.2 2280(512).png'},
    { type: '파워', name: ' 마이크로닉스 Classic II 풀체인지 700W 80PLUS BRONZE 230V EU', performance: 130, price: 80000, manufacturer:'마이크로닉스', release:'2021.04',
    detail:`
    제조회사        마이크로닉스        
    등록년월        2021년 04월
    제품 분류        ATX 파워        
    정격출력        700W
    80PLUS인증        80 PLUS 브론즈        
    ETA인증        BRONZE
    LAMBDA인증        STANDARD        
    전압변동        ±0.3%
    +12V 출력방식        +12V 싱글레일        
    +12V 가용률        100%
    PFC회로        액티브PFC        
    PF(역률)        99%
    쿨링팬 크기        120mm 팬        
    쿨링팬 개수        1개(팬)
    베어링        LLS(Sleeve)        
    깊이        140mm
    A/S 보증기간        무상 7년

    DC 출력
    +3.3V 출력        22A        
    +5V 출력        22A
    +12V 출력        58.3A        
    -12V 출력        0.3A
    +5Vsb 출력        3.0A

    [커넥터]
    케이블연결        케이블일체형        
    메인전원        24핀(20+4)
    보조전원        8+4+4핀 1개        
    PCIe 16핀(12+4)        12VHPWR 1개
    PCIe 8핀(6+2)        2개        
    SATA        6개
    IDE 4핀        4개

    부가기능
    팬리스모드        O        
    자동 팬 조절        O
    대기전력 1W 미만        O        
    플랫케이블        O

    내부설계
    105도 콘덴서        O        
    DC to DC 설계        O

    보호회로
    과전압(OVP)        O        
    저전압(UVP)        O
    과전력(OPP)        O        
    과열(OTP/OHP)        O
    단락(SCP)        O
    `, image: '/images/마이크로닉스 Classic II 풀체인지 700W 80PLUS BRONZE 230V EU.jpg'},
    { type: '케이스', name: 'darkFlash DLX21 RGB MESH 강화유리 (블랙)', performance: 100, price: 94000, manufacturer:'darkFlash', release:'2020.07',
    detail:`
    제조회사        darkFlash        
    등록년월        2020년 07월
    제품 분류        PC케이스(ATX)        
    케이스 크기        미들타워
    파워포함여부        파워미포함        
    지원파워규격        표준-ATX
    높이(H)        493mm

    지원보드규격
    Extended-ATX        O        
    표준-ATX        O
    Micro-ATX        O        
    Mini-ITX        O

    내부 확장
    8.9cm베이        2개        
    6.4cm베이        2개
    저장장치 장착        최대 4개        
    PCI 슬롯(수평)        7개

    쿨러 / 튜닝
    쿨링팬        총4개        
    LED팬        4개
    측면 개폐 방식        스윙도어        
    측면        강화유리
    후면        140mm LED x1        
    전면        140mm LED x3
    먼지필터        전체

    외부포트
    USB        O        
    USB 3.0        O
    USB 3.1 (Type-C)        O

    크기
    너비(W)        233mm        
    깊이(D)        448mm

    호환성
    파워 장착        235mm        
    파워 위치        하단후면
    GPU 장착        400mm        
    PU쿨러 장착        180mm
    수랭쿨러 규격        최대3열 지원        
    라디에이터(상단)        최대360mm, 280mm
    라디에이터(전면)        최대360mm, 280mm        
    라디에이터(후면)        최대140mm, 120mm

    컨트롤러 지원
    RGB 컨트롤        O
    `, image: '/images/darkFlash DLX21 RGB MESH 강화유리 (블랙).png'},
    { type: '쿨러', name: 'darkFlash Twister DX-360 V2.6 ARGB (블랙)', performance: 100, price: 115000, manufacturer:'darkFlash', release:'2022.10',
    detail:`
    제조회사        darkFlash        
    등록년월        2022년 10월
    냉각 방식        수랭        
    A/S기간        5년+누수보상
    라디에이터        3열
    인텔 소켓
    LGA1700        O        
    LGA1200        O
    LGA115x        O        
    LGA2066        O
    LGA2011-V3        O        
    LGA2011        O

    AMD 소켓
    AM5        O        
    AM4        O
    FMx/AMx(AM1/4외)        O

    [쿨링팬]
    팬 크기        120mm        
    팬 개수        3개
    팬 두께        25T        
    팬 커넥터        3-4핀
    베어링        Rifle        
    최대 팬속도        1800 RPM
    최대 풍량        51 CFM        
    풍압(정압)        1.5mmH₂O
    최대 팬소음        32dBA        
    팬수명        30,000시간

    부가기능
    LED 라이트        O        
    PWM 지원        O
    팬 컨트롤러        O

    LED시스템
    AURA SYNC        O        
    MYSTIC LIGHT        O
    RGB FUSION        O        
    POLYCHROME        O
    `, image: '/images/darkFlash Twister DX-360 V2.6 ARGB (블랙).png'},

    { type: 'CPU', name: '인텔 코어i7-14세대 14700K', performance: 150, price: 590000, manufacturer:'인텔', release:'2023.10',
    detail:`
    제조회사        인텔        
    등록년월        2023년 10월
    인텔 CPU종류        코어i7-14세대        
    소켓 구분        인텔(소켓1700)
    출시일        2023 4분기        
    제조 공정        10nm(인텔7)
    PBP/MTP        125~253W        
    PCIe 버전        PCIe5.0, 4.0
    최대 PCIe 레인수        16+4레인        
    시네벤치R23(싱글)        2151
    시네벤치R23(멀티)        33324

    사양
    코어 수        8+12코어        
    쓰레드 수        16+12쓰레드
    기본 클럭        3.4GHz        
    최대 클럭        5.6GHz
    L2 캐시        28MB        
    L3 캐시        33MB
    버스 속도        DMI4.0 8 GT/s

    메모리 사양
    최대 메모리 크기        192GB        
    메모리 규격        DDR5, DDR4
    메모리 클럭        5600, 3200MHz        
    메모리 채널        2

    그래픽 사양
    내장그래픽        탑재        
    GPU 모델명        인텔 UHD 770
    GPU 코어 속도        1,600MHz

    기술 지원
    하이퍼스레딩        O

    구성
    패키지 형태        정품        
    쿨러        미포함
    `, image: '/images/인텔 코어i7-14세대 14700K (랩터레이크 리프레시).png'},
    { type: 'gpu', name: 'XFX 라데온 RX 6700 SWFT 309 CORE D6 10GB', performance: 65, price: 450000, manufacturer:'XFX', release:'2023.03',
    detail:`
    제조회사        XFX        
    등록년월        2023년 03월

    칩셋 사양
    칩셋 제조사        AMD(ATi)        
    제품 시리즈        라데온 RX 6000
    GPU 제조 공정        7nm        
    AMD 칩셋        RX 6700
    부스트클럭        2425MHz        
    스트림 프로세서        2304개
    인터페이스        PCIe4.0x16

    메모리 사양
    메모리 종류        GDDR6(DDR6)        
    메모리 클럭        16000MHz
    메모리 용량        10GB        
    메모리 버스        160-bit

    그래픽 출력
    HDMI        1개        
    DisplayPort        3개

    모니터 지원        
    최대 모니터 4개
    부가기능
    제로팬(0-dB기술)        O        
    8K 지원        O
    4K 지원        O        
    HDR 지원        O

    전력 관련
    권장 파워용량        정격파워 650W 이상        
    전원 포트        8핀 x2

    냉각방식
    방열판        O        
    히트파이프        O
    팬쿨러        O

    제품 외형
    팬 개수        3개 팬        
    가로(길이)        304mm
    두께        42mm
    `, image: '/images/XFX 라데온 RX 6700 SWFT 309 CORE D6 10GB.png'},
    { type: '메인보드', name: 'MSI MAG B760M 박격포 맥스 WIFI', performance: 100, price: 230000, manufacturer:'msi', release:'2023.01',
    detail:`
    제조회사        MSI        
    등록년월        2023년 01월
    
    기본 사양
    제품 분류        인텔 CPU용        
    CPU 소켓        인텔(소켓1700)
    세부 칩셋        인텔 B760        
    CPU 장착수        1개
    폼팩터        M-ATX (24.4x24.4cm)        
    전원부        14페이즈
    Vcore단일출력        페이즈당75A

    메모리
    메모리 종류        DDR5        
    메모리 속도        7000MHz (PC5-56000)
    메모리 슬롯        4개        
    메모리 채널        듀얼
    메모리 용량        최대 192GB

    메모리 기술
    XMP3.0        O

    확장슬롯
    VGA 연결        PCIe5.0 x16
    VGA슬롯 위치        1번슬롯(24.4)        
    M.2        2개
    SATA3        6개        
    USB 3.2        후면 1개
    USB 3.1        후면 3개        
    USB 2.0        후면 4개
    무선랜 칩셋        Intel 계열        
    RGB 4핀        1개
    ARGB 3핀        2개        
    시스템팬 4핀        4개
    USB2.0 헤더        2개        
    USB3.0 헤더        1개
    USB3.1 Type C 헤더        1개

    PCIe버전
    PCIe5.0        O        
    PCIe4.0        O
    PCIe3.0        O

    PCIe슬롯
    PCIex16        1개        
    PCIex16(at x4)        1개
    PCIex1        1개

    저장장치인터페이스
    M.2        O        
    SATA3(6Gb/s)        O

    M.2 연결
    PCIe4.0        O        
    NVMe        O
    SATA        O
    
    M.2 폼팩터
    2242        O        
    2260        O
    2280        O

    RAID 지원
    SATA RAID        O

    그래픽 출력
    HDMI        O        
    DP        O
    
    후면단자
    USB 3.2        O        
    USB 3.1        O
    USB 2.0        O        
    RJ-45        O
    S/PDIF        O        
    오디오잭        O

    USB 타입
    Type-C (20Gbps)        O        
    Type-A (10Gbps)        O

    네트워크
    유선랜 칩셋        Realtek 8125BG        
    유선랜 속도        2.5기가비트
    RJ-45        1개

    무선랜 종류
    무선랜(Wi-Fi)        O        
    블루투스        O

    오디오
    오디오 칩셋        Realtek ALC897        
    아날로그 출력        7.1채널(8ch)

    I/O 헤더
    USB 3.0 헤더        O        
    USB 2.0 헤더        O
    USB3.1 Type C 헤더        O        
    RGB 12V 4핀 헤더        O
    ARGB 5V 3핀 헤더        O

    특징
    전원부 방열판        O        
    DrMOS        O
    M.2 히트싱크        O        
    UEFI        O
    `, image: '/images/MSI MAG B760M 박격포 맥스 WIFI.png'},
    { type: '램', name: '마이크론 Crucial DDR5-5600 CL46 PRO 패키지 대원씨티에스 (32GB(16Gx2))', performance: 100, price: 150000, manufacturer:'마이크론', release:'2023.05',
    detail:`
    제조회사        마이크론        
    등록년월        2023년 05월
    사용 장치        데스크탑용        
    제품 분류        DDR5
    메모리 규격        UDIMM        
    메모리 용량        32GB
    동작클럭(대역폭)        5600MHz (PC5-44800)        
    램타이밍        CL46-45-45
    동작전압        1.10V        
    램개수        2개
    히트싱크        방열판        
    방열판 색상        블랙
    부가기능
    XMP3.0        O        
    EXPO        O
    온다이ECC        O
    `, image: '/images/마이크론 Crucial DDR5-5600 CL46 PRO 패키지 대원씨티에스 (32GB(16Gx2)).png'},
    { type: 'SSD', name: 'SK하이닉스 Gold P31 M.2 NVMe (500GB)', performance: 45, price: 60000, manufacturer:'sk하이닉스', release:'2021.01',
    detail:`
    제조회사        SK하이닉스        
    등록년월        2021년 01월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe3.0x4 (32GT/s)        
    프로토콜        NVMe 1.3
    용량        500GB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드        
    RAM 탑재        DRAM 탑재
    RAM 타입        DDR4        
    컨트롤러        SK hynix Cepheus

    [성능]
    순차읽기        3,500MB/s        
    순차쓰기        3,200MB/s
    읽기IOPS        570K        
    쓰기IOPS        600K

    지원기능
    TRIM        O        
    SLC캐싱        O
    S.M.A.R.T        O

    부가기능
    전용 S/W        O

    [환경특성]
    MTBF        150만시간
    TBW        500TB

    A/S기간
    5년        O

    쿨링 정보
    NVMe 방열판        방열판 미포함

    [크기/무게]
    가로        80mm        
    세로        22mm
    두께        2.3mm        
    무게        7g
    `, image: '/images/SK하이닉스 Gold P31 M.2 NVMe (500GB).png'},
    { type: '파워', name: '잘만 MegaMax 600W 80PLUS STANDARD', performance: 100, price: 52000, manufacturer:'잘만', release:'2019.12',
    detail:`
    제조회사        잘만        
    등록년월        2019년 12월
    제품 분류        ATX 파워        
    정격출력        600W
    80PLUS인증        80 PLUS 스탠다드        
    +12V 출력방식        +12V 싱글레일
    +12V 가용률        90%        
    PFC회로        액티브PFC
    PF(역률)        98%        
    쿨링팬 크기        120mm 팬
    쿨링팬 개수        1개(팬)        
    베어링        HDB/HYB
    깊이        140mm        
    A/S 보증기간        무상 6년

    DC 출력
    +3.3V 출력        22A        
    +5V 출력        21A
    +12V 출력        45A        
    -12V 출력        0.5A
    +5Vsb 출력        3.0A
    
    [커넥터]
    케이블연결        케이블일체형        
    메인전원        24핀(20+4)
    보조전원        8(4+4)+4핀 1개        
    PCIe 8핀(6+2)        2개
    SATA        6개        
    IDE 4핀        4개
    FDD        1개

    부가기능
    자동 팬 조절        O        
    대기전력 1W 미만        O
    플랫케이블        O

    내부설계
    105도 콘덴서        O

    보호회로
    과전압(OVP)        O        
    저전압(UVP)        O
    과전력(OPP)        O        
    단락(SCP)        O
    `, image: '/images/잘만 MegaMax 600W 80PLUS STANDARD.png'},
    { type: '쿨러', name: '쿨러마스터 HYPER 620S ARGB', performance: 50, price: 38000, manufacturer:'쿨러마스터', release:'2023.04',
    detail:`
    제조회사        쿨러마스터        
    등록년월        2023년 04월
    냉각 방식        공랭        
    재질        알루미늄
    A/S기간        2년        
    가로        125mm
    높이        154.9mm        
    무게        1100g
    히트파이프        6개

    인텔 소켓
    LGA1700        O        
    LGA1200        O
    LGA115x        O

    AMD 소켓
    AM5        O        
    AM4        O

    [쿨링팬]
    팬 크기        120mm        
    팬 개수        2개
    팬 두께        25T        
    팬 커넥터        4핀
    베어링        Rifle        
    최대 팬속도        1750 RPM
    최대 풍량        71.93 CFM        
    풍압(정압)        1.86mmH₂O
    최대 팬소음        27.2dBA        
    팬수명        160,000시간

    부가기능
    LED 라이트        O        
    PWM 지원        O
    `, image: '/images/쿨러마스터 HYPER 620S ARGB.png'},

    { type: 'CPU', name: '인텔 코어i9-14세대 14900K', performance: 200, price: 830000, manufacturer:'인텔', release:'2023.10',
    detail:`
    제조회사        인텔        
    등록년월        2023년 10월
    인텔 CPU종류        코어i9-14세대        
    소켓 구분        인텔(소켓1700)
    출시일        2023 4분기        
    제조 공정        10nm(인텔7)
    PBP/MTP        125~253W        
    PCIe 버전        PCIe5.0, 4.0
    최대 PCIe 레인수        16+4레인        
    시네벤치R23(싱글)        2289
    시네벤치R23(멀티)        38134

    사양
    코어 수        8+16코어        
    쓰레드 수        16+16쓰레드
    기본 클럭        3.2GHz        
    최대 클럭        6.0GHz
    L2 캐시        32MB        
    L3 캐시        36MB
    연산 체계        64비트        
    버스 속도        DMI4.0 8 GT/s

    메모리 사양
    최대 메모리 크기        192GB        
    메모리 규격        DDR5, DDR4
    메모리 클럭        5600, 3200MHz        
    메모리 채널        2

    그래픽 사양
    내장그래픽        탑재        
    GPU 모델명        인텔 UHD 770
    GPU 코어 속도        1,650MHz

    기술 지원
    하이퍼스레딩        O

    구성
    패키지 형태        정품        
    쿨러        미포함
            `, image: '/images/인텔 코어i9-14세대 14900K (랩터레이크 리프레시) (정품).png'},
    { type: 'gpu', name: '갤럭시 GALAX 지포스 RTX 4060 Ti EX BLACK OC D6 8GB', performance: 100, price: 600000, manufacturer:'갤럭시', release:'2023.05',
    detail:`
    제조회사        갤럭시        
    등록년월        2023년 05월

    칩셋 사양
    칩셋 제조사        NVIDIA        
    제품 시리즈        지포스 RTX 40
    GPU 제조 공정        4nm        
    NVIDIA 칩셋        RTX 4060 Ti
    베이스클럭        2310MHz        
    부스트클럭        2640MHz
    쿠다 프로세서        4352개        
    인터페이스        PCIe4.0x16(at x8)

    메모리 사양
    메모리 종류        GDDR6(DDR6)        
    메모리 클럭        18000MHz
    메모리 용량        8GB        
    메모리 버스        128-bit

    그래픽 출력
    HDMI        1개        
    DisplayPort        3개
    모니터 지원        최대 모니터 4개

    부가기능
    제로팬(0-dB기술)        O        
    8K 지원        O
    4K 지원        O        
    HDR 지원        O
    HDCP 2.3        O

    전력 관련
    사용전력        160W        
    권장 파워용량        정격파워 550W 이상
    전원 포트        8핀 x1

    냉각방식
    방열판        O        
    히트파이프        O
    팬쿨러        O

    제품 외형
    팬 개수        2개 팬        
    가로(길이)        251mm
    두께        40mm

    추가 구성
    백플레이트        O        
    LED 라이트        O

    LED 위치
    측면 LED        O
    `, image: '/images/갤럭시 GALAX 지포스 RTX 4060 Ti EX BLACK OC D6 8GB.png'},
    { type: '메인보드', name: 'GIGABYTE B760M E 피씨디렉트', performance: 50, price: 139000, manufacturer:'GIGABYTE', release:'2023.09',
    detail:`
    제조회사        GIGABYTE        
    등록년월        2023년 09월

    기본 사양
    제품 분류        인텔 CPU용        
    CPU 소켓        인텔(소켓1700)
    세부 칩셋        인텔 B760        
    CPU 장착수        1개
    폼팩터        M-ATX (23.0x21.5cm)        
    전원부        6+1+1페이즈

    메모리
    메모리 종류        DDR5        
    메모리모듈        UDIMM
    메모리 속도        8000MHz (PC5-64000)        
    메모리 슬롯        2개
    메모리 채널        듀얼        
    메모리 용량        최대 96GB

    메모리 기술
    XMP        O

    확장슬롯
    VGA 연결        PCIe4.0 x16
    VGA슬롯 위치        1번슬롯(24.4미만)        
    M.2        2개
    SATA3        4개        
    USB 3.0        후면 4개
    USB 2.0        후면 2개        
    RGB 4핀        1개
    시스템팬 4핀        2개        
    USB2.0 헤더        2개
    USB3.0 헤더        1개

    PCIe버전
    PCIe4.0        O        
    PCIe3.0        O

    PCIe슬롯
    PCIex16        1개        
    PCIex1        1개

    저장장치인터페이스
    M.2        O        
    SATA3(6Gb/s)        O

    M.2 연결
    PCIe4.0        O        
    PCIe        O
    NVMe        O

    M.2 폼팩터
    2280        O

    RAID 지원
    SATA RAID        O

    그래픽 출력
    D-SUB        O        
    HDMI        O
    DP        O

    후면단자
    USB 3.0        O        
    USB 2.0        O
    RJ-45        O        
    오디오잭        O

    네트워크
    유선랜 칩셋        Realtek        
    유선랜 속도        기가비트
    RJ-45        1개

    오디오
    오디오 칩셋        Realtek        
    아날로그 출력        7.1채널(8ch)

    I/O 헤더
    USB 3.0 헤더        O        
    USB 2.0 헤더        O
    RGB 12V 4핀 헤더        O       
    TPM 헤더        O

    특징
    UEFI        O
    `, image: '/images/GIGABYTE B760M E 피씨디렉트.png'},
    { type: '램', name: 'TeamGroup T-Force DDR5-6000 CL38 Delta RGB 화이트 패키지 서린 (32GB(16Gx2))', performance: 100, price: 159000, manufacturer:'TeamGroup', release:'2022.02',
    detail:`
    제조회사        TeamGroup        
    등록년월        2022년 02월
    사용 장치        데스크탑용        
    제품 분류        DDR5
    메모리 규격        DIMM        
    메모리 용량        32GB
    동작클럭(대역폭)        6000MHz (PC5-48000)        
    램타이밍        CL38-38-38-78
    동작전압        1.25V        
    램개수        2개
    히트싱크        방열판        
    방열판 색상        화이트
    LED색상        RGB

    부가기능
    LED 라이트        O        
    XMP3.0        O
    온다이ECC        O

    LED 시스템
    AURA SYNC        O        
    MYSTIC LIGHT        O
    RGB FUSION        O        
    POLYCHROME        O
    `, image: '/images/TeamGroup T-Force DDR5-6000 CL38 Delta RGB 화이트 패키지 서린 (32GB(16Gx2)).png'},
    { type: 'SSD', name: '키오시아 EXCERIA G2 M.2 NVMe (1TB)', price: 78000, performance: 100, manufacturer:'키오시아', release:'2022.11',
    detail:`
    제조회사        키오시아        
    등록년월        2022년 11월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe3.0x4 (32GT/s)        
    프로토콜        NVMe 1.3
    용량        1TB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드        
    RAM 탑재        DRAM 탑재
    RAM 타입        확인요망        
    컨트롤러        KIOXIA

    [성능]
    순차읽기        2,100MB/s        
    순차쓰기        1,700MB/s
    읽기IOPS        400K        
    쓰기IOPS        400K

    지원기능
    TRIM        O        
    GC        O
    S.M.A.R.T        O        
    ECC        O

    부가기능
    전용 S/W        O

    소프트웨어 지원
    관리기능        O

    [환경특성]
    MTBF        150만시간
    TBW        400TB

    A/S기간
    5년        O        
    제한보증        O

    쿨링 정보
    NVMe 방열판        방열판 미포함

    [크기/무게]
    가로        80.15mm        
    세로        22.15mm
    두께        2.23mm       
    무게        6.8g
    `, image: '/images/키오시아 EXCERIA G2 M.2 NVMe (1TB).png'},
    { type: '파워', name: '시소닉 NEW FOCUS GX-850 GOLD Full Modular ATX 3.0', performance: 140, price: 200000, manufacturer:'시소닉', release:'2023.09',
    detail:`
    제조회사        시소닉        
    등록년월        2023년 09월
    제품 분류        ATX 파워        
    정격출력        850W
    80PLUS인증        80 PLUS 골드        
    +12V 출력방식        +12V 싱글레일
    PFC회로        액티브PFC        
    PF(역률)        99%
    쿨링팬 크기        135mm 팬        
    쿨링팬 개수        1개(팬)
    베어링        FDB(유체)        
    깊이        150mm
    A/S 보증기간        무상 10년

    DC 출력
    +3.3V 출력        20A        
    +5V 출력        20A
    +12V 출력        70A        
    -12V 출력        0.3A
    +5Vsb 출력        3.0A

    [커넥터]
    케이블연결        풀모듈러        
    메인전원        24핀(20+4)
    보조전원        8핀(4+4) 2개        
    PCIe 16핀(12+4)        12VHPWR 1개
    PCIe 8핀(6+2)        3개        
    SATA        8개
    SATA3.3        2개        
    IDE 4핀        3개

    부가기능
    팬리스모드        O        
    자동 팬 조절        O

    내부설계
    DC to DC 설계        O

    보호회로
    과전압(OVP)        O        
    저전압(UVP)        O
    과전류(OCP)        O        
    과전력(OPP)        O
    과열(OTP/OHP)        O        
    단락(SCP)        O
    서지+인러쉬(SIP)        O        
    무부하(NLP)        O
    `, image: '/images/시소닉 NEW FOCUS GX-850 GOLD Full Modular ATX 3.0.png'},
    { type: `케이스`, name: 'BRAVOTEC GUARDIAN 3100M V2 타이탄 글래스 (블랙)', performance: 80, price: 79000, manufacturer:'BRAVOTEC', release:'2022.12',
    detail:`
    제조회사        BRAVOTEC        
    등록년월        2022년 12월
    제품 분류        PC케이스(ATX)        
    케이스 크기        빅타워
    파워포함여부        파워미포함        
    지원파워규격        표준-ATX
    높이(H)        494mm

    지원보드규격
    Extended-ATX        O        
    표준-ATX        O
    Micro-ATX        O        
    Mini-ITX        O

    내부 확장
    8.9cm베이        2개        
    6.4cm베이        3개
    저장장치 장착        최대 5개        
    PCI 슬롯(수평)        7+3개
    수직 PCI형태        기본형

    쿨러 / 튜닝
    쿨링팬        총4개        
    LED팬        4개
    전면 패널 타입        메쉬       
     측면        강화유리
    먼지필터        전체

    외부포트
    USB        O        
    USB 3.0        O
    USB 3.1 (Type-C)        O

    크기
    너비(W)        245mm        
    이(D)        464mm

    호환성
    파워 장착        280~380mm        
    파워 위치        하단후면
    GPU 장착        380mm        
    CPU쿨러 장착        180mm
    수랭쿨러 규격        최대3열 지원        
    라디에이터(상단)        최대360mm, 280mm
    라디에이터(전면)        최대360mm, 280mm        
    라디에이터(후면)        최대140mm, 120mm

    컨트롤러 지원
    RGB 컨트롤        O
    `, image: '/images/BRAVOTEC GUARDIAN 3100M V2 타이탄 글래스 (블랙).png'},
    { type: '쿨러', name: '맥스엘리트 MOTHRA 360 AIO ARGB (BLACK)', performance: 100, price: 126000, manufacturer:'맥스엘리트', release:'2022.02',
    detail:`
    제조회사        맥스엘리트        
    등록년월        2022년 02월
    냉각 방식        수랭        
    TDP        300W
    A/S기간        5년        
    라디에이터        3열

    인텔 소켓
    LGA1700        O        
    LGA1200        O
    LGA115x        O        
    LGA2066        O
    LGA2011        O

    AMD 소켓
    AM4        O        
    FMx/AMx(AM1/4외)        O

    [쿨링팬]
    팬 크기        120mm        
    팬 개수        3개
    팬 두께        25T        
    팬 커넥터        3-4핀
    베어링        Hydraulic        
    최대 팬속도        1800 RPM
    최대 풍량        63.34 CFM        
    풍압(정압)        1.95mmH₂O
    최대 팬소음        33.1dBA

    부가기능
    LED 라이트        O       
    PWM 지원        O
    워터블록/로고 회전        O

    LED시스템
    AURA SYNC        O        
    MYSTIC LIGHT        O
    RGB FUSION        O        
    POLYCHROME        O
    `, image: '/images/맥스엘리트 MOTHRA 360 AIO ARGB (BLACK).png'},


//고사양


    { type: 'CPU', name: '인텔 코어 13세대 i9-13900KS', performance: 190, price: 1040000, manufacturer:'인텔', release:'2023.01.',
    detail:`
    제조회사        인텔        
    등록년월        2023년 01월
    인텔 CPU종류        코어i9-13세대        
    소켓 구분        인텔(소켓1700)
    출시일        2023 1분기        
    제조 공정        10nm(인텔7)

    사양
    코어 수        8+16코어        
    쓰레드 수        16+16쓰레드
    기본 클럭        3.2GHz        
    최대 클럭        6.0GHz
    L2 캐시        32MB        
    L3 캐시        36MB
    연산 체계        64비트        
    버스 속도        DMI4.0 8 GT/s
    PBP/MTP        150~253W        
    PCIe 버전        PCIe5.0, 4.0
    최대 PCIe 레인수        20레인

    메모리 사양
    최대 메모리 크기        128GB        
    메모리 규격        DDR5, DDR4
    메모리 클럭        5600, 3200MHz        
    메모리 채널        2

    그래픽 사양
    내장그래픽        탑재        
    PU 모델명        인텔 UHD 770
    GPU 코어 속도        1,650MHz

    기술 지원
    하이퍼스레딩        ○
    `, image: '/images/인텔 코어 13세대 i9-13900KS.jpg'},
    { type: 'gpu', name: 'ASUS GeForce RTX 4090 TUF GAMING O24G OC D6X 24GB', performance: 200, price: 3299000, manufacturer:'ASUS', release:'2022.10.',
    detail:`
    제조회사        ASUS        
    등록년월        2022년 10월

    칩셋 사양
    칩셋 제조사        NVIDIA        
    제품 시리즈        지포스 RTX 40
    GPU 제조 공정        4nm        
    NVIDIA 칩셋        RTX 4090
    부스트클럭        2595MHz        
    쿠다 프로세서        16384개
    인터페이스        PCIe4.0x16

    메모리 사양
    메모리 종류        GDDR6X(DDR6X)        
    메모리 클럭        21000MHz
    메모리 용량        24GB        
    메모리 버스        384-bit

    그래픽 출력
    HDMI        2개        
    DisplayPort        3개
    모니터 지원        최대 모니터 4개

    부가기능
    제로팬(0-dB기술)        ○        
    8K 지원        ○
    4K 지원        ○        
    HDR 지원        ○
    HDCP 2.3        ○
    전력 관련
    권장 파워용량        정격파워 850W 이상        
    전원 포트        16핀(12VHPWR) x1

    냉각방식
    방열판        ○        
    히트파이프        ○
    베이퍼챔버        ○        
    팬쿨러        ○

    제품 외형
    팬 개수        3개 팬        
    가로(길이)        348.2mm
    두께        72.6mm

    추가 구성
    백플레이트        ○        
    LED 라이트        ○

    LED 위치
    전면 LED        ○        
    측면 LED        ○

    구성품
    VGA지지대        ○
    `, image: '/images/ASUS GeForce RTX 4090 TUF GAMING O24G OC D6X 24GB.jpg'},
    { type: '메인보드', name: 'ROG MAXIMUS Z690 EXTREME GLACIAL STCOM (인텔Z690/E-ATX)', performance: 200, price: 2874800, manufacturer:'ROG', release:'2021.11.',
    detail:`
    제조회사        ASUS        
    등록년월        2021년 11월

    기본 사양
    제품 분류        인텔 CPU용        
    CPU 소켓        인텔(소켓1700)
    세부 칩셋        인텔 Z690        
    CPU 장착수        1개
    폼팩터        E-ATX (30.5x27.7cm)        
    전원부        24+1페이즈
    Vcore단일출력        페이즈당105A

    메모리
    메모리 종류        DDR5        
    메모리 속도        6400MHz (PC5-51200)
    메모리 슬롯        4개        
    메모리 채널        듀얼
    메모리 용량        최대 128GB

    메모리 기술
    XMP        ○        
    옵테인        ○

    확장슬롯
    VGA 연결        PCIe5.0 x16

    PCIe버전
    PCIe5.0        ○        
    PCIe4.0        ○
    PCIe3.0        ○        
    PCIe        ○

    PCIe슬롯
    PCIex16        2개        
    PCIex1        1개

    저장장치인터페이스
    M.2        ○        
    SATA3(6Gb/s)        ○
    M.2        5개        
    SATA3        6개

    M.2 연결
    PCIe5.0        ○        
    PCIe4.0        ○
    PCIe        ○        
    NVMe        ○
    SATA        ○

    M.2 폼팩터
    2242        ○        
    2260        ○
    2280        ○        
    22110        ○

    RAID 지원
    SATA RAID        ○

    그래픽 출력
    HDMI        ○        
    Type-C        ○

    후면단자
    USB 3.2        ○        
    USB 3.1        ○
    썬더볼트4        ○        
    RJ-45        ○
    S/PDIF        ○        
    오디오잭        ○

    USB 타입
    Type-C (20Gbps)        ○        
    Type-C (10Gbps)        ○
    Type-A (10Gbps)        ○
    USB 3.2        후면 1개        
    USB 3.1        후면 8개

    네트워크
    유선랜 칩셋        Aquantia 10G, 인텔 2.5G        
    유선랜 속도        10기가비트
    RJ-45        2개

    유선랜 특징
    듀얼LAN        ○

    무선랜 종류
    무선랜(Wi-Fi)        ○        
    블루투스        ○

    오디오
    오디오 칩셋        SupremeFX ALC4082        
    아날로그 출력        7.1채널(8ch)

    I/O 헤더
    썬더볼트4 헤더        ○        
    USB 3.0 헤더        ○
    USB 2.0 헤더        ○        
    USB3.2 Type C 헤더        ○
    RGB 12V 4핀 헤더        ○        
    ARGB 5V 3핀 헤더        ○
    ARGB 6핀 헤더        ○
    RGB 4핀        1개        
    ARGB 3핀        1개
    시스템팬 4핀        2개        
    USB2.0 헤더        2개
    USB3.0 헤더        2개        
    USB3.2 Type C 헤더        1개
    
    특징
    M.2 히트싱크        ○        
    LED 라이트        ○
    UEFI        ○
    LED 시스템        AURA SYNC

    LED 위치
    내장형(온보드) LED        ○        
    전면 LED        ○
    후면 LED        ○        
    로고 LED        ○
    I/O쉴드(아머) LED        ○        
    히트싱크 LED        ○
    `, image: '/images/ROG MAXIMUS Z690 EXTREME GLACIAL STCOM (인텔Z690,E-ATX).jpg'},
    { type: '램', name: 'CORSAIR DDR5-5600 CL40 VENGEANCE RGB BLACK', performance: 200, price: 880000, manufacturer:'CORSAIR', release:'2023.02.',
    detail:`
    제조회사        CORSAIR        
    등록년월        2023년 08월
    사용 장치        데스크탑용        
    제품 분류        DDR5
    메모리 규격        DIMM        
    메모리 용량        128GB
    동작클럭(대역폭)        5600MHz (PC5-44800)        
    램타이밍        CL40-40-40-77
    동작전압        1.25V        
    램개수        4개
    부가기능
    LED 라이트        ○        
    XMP3.0        ○
    히트싱크        방열판        
    방열판 색상        블랙
    LED색상        RGB

    LED 시스템
    CORSAIR iCUE        ○
    `, image: '/images/CORSAIR DDR5-5600 CL40 VENGEANCE RGB BLACK.jpg'},
    { type: 'SSD', name: 'CORSAIR MP600 PRO LPX M.2 NVMe 2280 8TB', performance: 200, price: 1699000, manufacturer:'CORSAIR', release:'2022.02.',
    detail:`
    제조회사        CORSAIR        
    등록년월        2022년 02월
    
    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe4.0x4 (64GT/s)        
    프로토콜        NVMe 1.4
    용량        8TB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드        
    RAM 탑재        DRAM 탑재
    RAM 타입        확인요망        
    컨트롤러        파이슨 PS5018-E18
    게임기 호환        PS5 호환

    [성능]
    순차읽기        7,100MB/s        
    순차쓰기        6,800MB/s
    읽기IOPS        1,000K        
    쓰기IOPS        1,200K

    지원기능
    TRIM        ○        
    GC        ○
    S.M.A.R.T        ○        
    DEVSLP        ○

    부가기능
    AES 암호화        ○

    [환경특성]
    MTBF        160만시간
    TBW        1,400TB

    A/S기간
    5년        ○

    쿨링 정보
    NVMe 방열판        방열판 포함

    [크기/무게]
    가로        80mm        
    세로        23mm
    두께        11mm        
    무게        41g
    `, image: '/images/CORSAIR MP600 PRO LPX M.2 NVMe 2280 8TB.jpg'},
    { type: '파워', name: 'ASUS ROG STRIX THOR 1600T (ATX/1600W)', performance: 200, price: 991000, manufacturer:'ASUS', release:'2023.06.',
    detail:`
    제조회사        ASUS        
    등록년월        2022년 07월
    제품 분류        ATX 파워        
    정격출력        1600W
    80PLUS인증        80 PLUS 티타늄        
    ETA인증        PLATINUM
    LAMBDA인증        A++        
    +12V 출력방식        +12V 싱글레일
    +12V 가용률        100%        
    쿨링팬 크기        135mm 팬
    쿨링팬 개수        1개(팬)        
    베어링        2볼
    깊이        190mm        
    A/S 보증기간        무상 10년

    DC 출력
    +3.3V 출력        20A        
    +5V 출력        20A
    +12V 출력        133.3A        
    -12V 출력        0.3A
    +5Vsb 출력        3.0A

    [커넥터]
    케이블연결        풀모듈러        
    메인전원        24핀
    보조전원        8핀(4+4) 2개        
    PCIe 8핀(6+2)        16개
    SATA        14개        
    IDE 4핀        5개
    RGB        2개

    부가기능
    팬리스모드        O        
    자동 팬 조절        O
    프리볼트        O        
    LED 라이트        O

    보호회로
    과전압(OVP)        O        
    저전압(UVP)        O
    과전류(OCP)        O        
    과전력(OPP)        O
    과열(OTP/OHP)        O        
    단락(SCP)        O

    LED 시스템
    AURA SYNC        O
    `, image: '/images/ASUS ROG STRIX THOR 1600T (ATX, 1600W).jpg'},
    { type: '케이스', name: 'ABKO SUITMASTER AL1000 그레이 (빅타워)', performance: 200, price: 852500, manufacturer:'ABKO', release:'2020.11.',
    detail:`
    제조회사        앱코        
    등록년월        2020년 11월
    케이스 크기        빅타워        
    지원파워규격        표준-ATX
    사운드        HD AUDIO

    지원보드규격
    Extended-ATX        O        
    표준-ATX        O
    Micro-ATX        O        
    Mini-ITX        O

    내부 확장
    8.9cm베이        2개        
    6.4cm베이        10개
    저장장치 장착        최대 12개        
    PCI 슬롯(수평)        7개

    쿨러 / 튜닝
    쿨링팬        총4개        
    LED팬        4개
    측면        강화유리        
    후면        200mm LED x2
    전면        200mm LED x2

    외부포트
    USB 3.0        O        
    USB 3.0 (Type-C)        O
    크기
    너비(W)        365mm        
    높이(H)        645mm
    깊이(D)        510mm

    호환성
    파워 장착        350mm        
    파워 위치        하단
    GPU 장착        420mm        
    CPU쿨러 장착        235mm
    라디에이터(상단)        최대360mm

    컨트롤러 지원
    리모컨        O
    `, image: '/images/ABKO SUITMASTER AL1000 그레이 (빅타워).jpg'},
    { type: '쿨러', name: 'ASUS ROG RYUJIN III 360 ARGB WHITE EDITION', performance: 200, price: 535000, manufacturer:'ASUS', release:'2023.07.',
    detail:`
    제조회사        ASUS        
    등록년월        2023년 07월
    냉각 방식        수랭        
    A/S기간        6년
    라디에이터        3열

    인텔 소켓
    LGA1700        O        
    LGA1200        O
    LGA115x        O

    AMD 소켓
    AM5        O        
    AM4        O

    [쿨링팬]
    팬 크기        120mm        
    팬 개수        3개
    팬 두께        25T        
    팬 커넥터        4핀
    최대 팬속도        2200 RPM        
    최대 풍량        70.076 CFM
    풍압(정압)        3.88mmH₂O        
    최대 팬소음        36.45dBA

    부가기능
    LED 라이트        O        
    PWM 지원        O
    LCD        O        
    데이지체인        O

    LED시스템
    AURA SYNC        O        
    제조사 소프트웨어        O
    `, image: '/images/ASUS ROG RYUJIN III 360 ARGB WHITE EDITION.jpg'},
    { type: 'gpu', name: 'ASUS GeForce RTX 4090 ROG STRIX O24G GAMING OC D6X 24GB', performance: 200, price: 3559000, manufacturer:'ASUS', release:'2023.06.',
    detail:`
    제조회사        ASUS        
    등록년월        2022년 10월

    칩셋 사양
    칩셋 제조사        NVIDIA        
    제품 시리즈        지포스 RTX 40
    GPU 제조 공정        4nm        
    VIDIA 칩셋        RTX 4090
    부스트클럭        2640MHz        
    쿠다 프로세서        16384개
    인터페이스        PCIe4.0x16

    메모리 사양
    메모리 종류        GDDR6X(DDR6X)        
    메모리 클럭        21000MHz
    메모리 용량        24GB        
    메모리 버스        384-bit

    그래픽 출력
    HDMI        2개        
    DisplayPort        3개
    모니터 지원        최대 모니터 4개

    부가기능
    제로팬(0-dB기술)        O        
    8K 지원        O
    4K 지원        O        
    HDR 지원        O
    HDCP 2.3        O

    전력 관련
    권장 파워용량        정격파워 1000W 이상        
    전원 포트        16핀(12VHPWR) x1

    냉각방식
    방열판        O        
    히트파이프        O
    베이퍼챔버        O        
    팬쿨러        O

    제품 외형
    팬 개수        3개 팬        
    가로(길이)        357.6mm
    두께        70.1mm

    추가 구성
    백플레이트        O        
    LED 라이트        O

    LED 위치
    전면 LED        O        
    후면 LED        O
    측면 LED        O

    구성품
    VGA지지대        O
    `, image: '/images/ASUS GeForce RTX 4090 ROG STRIX O24G GAMING OC D6X 24GB.jpg'},
    { type: '메인보드', name: 'GIGABYTE Z790 AORUS XTREME 피씨디렉트 (인텔Z790/E-ATX)', performance: 170, price: 1550000, manufacturer:'GIGABYTE', release:'2023.10.',
    detail:`
    제조회사        GIGABYTE        
    등록년월        2022년 12월

    기본 사양
    제품 분류        인텔 CPU용       
    CPU 소켓        인텔(소켓1700)
    세부 칩셋        인텔 Z790        
    CPU 장착수        1개
    폼팩터        E-ATX (30.5x28.5cm)        
    전원부        20+1+2페이즈
    Vcore단일출력        페이즈당105A

    메모리
    메모리 종류        DDR5        
    메모리 속도        8000MHz (PC5-64000)
    메모리 슬롯        4개        
    메모리 채널        듀얼
    메모리 용량        최대 128GB

    메모리 기술
    XMP        O

    확장슬롯
    VGA 연결        PCIe5.0 x16

    PCIe버전
    PCIe5.0        O        
    PCIe3.0        O

    PCIe슬롯
    PCIex16        1개        
    PCIex16(at x4)        1개
    PCIex16(at x1)        1개

    멀티 GPU
    CrossFire        O

    저장장치인터페이스
    M.2        O        
    SATA3(6Gb/s)        O
    M.2        5개        
    SATA3        4개
    썬더볼트4        후면 2개        
    USB 3.1        후면 10개
    무선랜 칩셋        Killer AX1690        
    ARGB 3핀        2개
    시스템팬 4핀        8개        
    USB2.0 헤더        1개
    USB3.0 헤더        2개        
    USB3.2 Type C 헤더        1개
    LED 시스템        RGB FUSION

    M.2 연결
    PCIe5.0        O        
    PCIe4.0        O
    NVMe        O        
    SATA        O

    M.2 폼팩터
    2260        O        
    2280        O
    22110        O        
    25110        O

    RAID 지원
    NVMe RAID        O        
    SATA RAID        O

    그래픽 출력
    Type-C        O

    후면단자
    USB 3.1        O        
    썬더볼트4        O
    RJ-45        O        
    S/PDIF        O
    오디오잭        O

    USB 타입
    Type-A (10Gbps)        O

    네트워크
    유선랜 칩셋        Marvell AQtion AQC107, Intel 2.5GbE        
    유선랜 속도        10기가비트
    RJ-45        2개

    무선랜 종류
    무선랜(Wi-Fi)        O        
    블루투스        O

    오디오
    오디오 칩셋        ESS ES9280AC        
    아날로그 출력        2채널

    I/O 헤더
    USB 3.0 헤더        O        
    USB 2.0 헤더        O
    USB3.2 Type C 헤더        O        
    ARGB 5V 3핀 헤더        O

    특징
    전원부 방열판        O        
    SPS(DrMOS)        O
    M.2 히트싱크        O        
    LED 라이트        O
    UEFI        O

    LED 위치
    전면 LED        O        
    로고 LED        O
    I/O쉴드(아머) LED        O
    `, image: '/images/GIGABYTE Z790 AORUS XTREME 피씨디렉트 (인텔Z790, E-ATX).jpg'},
    { type: '램', name: 'G.SKILL DDR5-6400 CL32 TRIDENT Z5 RGB J 패키지 (96GB(48Gx2))', performance: 170, price: 577980, manufacturer:'G.SKILL', release:'2023.05.',
    detail:`
    제조회사        G.SKILL        
    등록년월        2023년 05월
    사용 장치        데스크탑용        
    제품 분류        DDR5
    메모리 규격        DIMM        
    메모리 용량        48GB
    동작클럭(대역폭)        6400MHz (PC5-51200)        
    램타이밍        CL32-39-39-102
    동작전압        1.35V        
    램개수        2개
    히트싱크        방열판        
    방열판 색상        블랙
    LED색상        RGB

    부가기능
    LED 라이트        O        
    XMP3.0        O
    온다이ECC        O

    LED 시스템
    AURA SYNC        O        
    MYSTIC LIGHT        O
    RGB FUSION        O        
    POLYCHROME        O
    `, image: '/images/G.SKILL DDR5-6400 CL32 TRIDENT Z5 RGB J 패키지 (96GB(48Gx2)).jpg'},
    { type: 'SSD', name: '솔리다임 D3-S4520 SATA [7.68TB TLC]', performance: 180, price: 1562000, manufacturer:'솔리다임', release:'2023.02.',
    detail:`
    제조회사        솔리다임        
    등록년월        2023년 02월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        6.4cm(2.5형)
    인터페이스        SATA3 (6Gb/s)        
    용량        7.68TB
    메모리 타입        TLC(기타)        
    낸드 구조        3D낸드

    [성능]
    순차읽기        550MB/s        
    순차쓰기        510MB/s
    읽기IOPS        86K        
    쓰기IOPS        30K

    부가기능
    AES 암호화        O

    [환경특성]
    MTBF        200만시간
    `, image: '/images/솔리다임 D3-S4520 SATA [7.68TB TLC].jpg'},
    { type: '파워', name: '시소닉 PRIME TITANIUM TX-1600 Full Modular ATX 3.0 (ATX/1600W)', performance: 200, price: 920000, manufacturer:'시소닉', release:'2023.07.',
    detail:`
    제조회사        시소닉        
    등록년월        2023년 07월
    제품 분류        ATX 파워        
    정격출력        1600W
    80PLUS인증        80 PLUS 티타늄        
    LAMBDA인증        A-
    +12V 출력방식        +12V 싱글레일        
    +12V 가용률        100%
    PFC회로        액티브PFC        
    PF(역률)        99%
    쿨링팬 크기        135mm 팬        
    쿨링팬 개수        1개(팬)
    베어링        FDB(유체)        
    깊이        210mm
    A/S 보증기간        무상 12년

    DC 출력
    +3.3V 출력        25A        
    +5V 출력        25A
    +12V 출력        133.3A        
    -12V 출력        0.5A
    +5Vsb 출력        3.0A

    [커넥터]
    케이블연결        풀모듈러        
    메인전원        24핀(20+4)
    보조전원        8핀(4+4) 3개        
    PCIe 16핀(12+4)        12VHPWR 2개
    PCIe 8핀(6+2)        6개        
    SATA        16개
    SATA3.3        2개        
    IDE 4핀        3개

    부가기능
    팬리스모드        O        
    자동 팬 조절        O
    수동 팬 조절        O        
    프리볼트        O

    내부설계
    DC to DC 설계        O

    보호회로
    과전압(OVP)        O        
    저전압(UVP)        O
    과전류(OCP)        O        
    과전력(OPP)        O
    과열(OTP/OHP)        O        
    단락(SCP)        O
    서지+인러쉬(SIP)        O        
    무부하(NLP)        O
    `, image: '/images/시소닉 PRIME TITANIUM TX-1600 Full Modular ATX 3.0 (ATX, 1600W).jpg'},
    { type: '케이스', name: 'LIAN-LI V3000 PLUS (빅타워)', performance: 200, price: 839000, manufacturer:'LIAN-LI', release:'2023.04.',
    detail:`
    제조회사        리안리        
    등록년월        2023년 04월
    제품 분류        PC케이스(ATX)        
    케이스 크기        빅타워
    파워포함여부        파워미포함        
    높이(H)        674mm
    라디에이터(측면)        480mm, 420mm최대        
    라디에이터(하단)        420mm, 360mm최대
    지원보드규격
    Extended-ATX        O        
    표준-ATX        O
    Micro-ATX        O        
    Mini-ITX        O
    SSI-EEB        O

    내부 확장
    8.9cm베이        8개        
    6.4cm베이        8개
    저장장치 장착        최대 16개        
    PCI 슬롯(수평)        8개
    수직 PCI형태        슬롯변경형

    쿨러 / 튜닝
    전면 패널 타입        메쉬        
    측면 개폐 방식        스윙도어
    측면        강화유리        
    먼지필터        부분

    외부포트
    USB 3.0        O        
    USB 3.1 (Type-C)        O

    크기
    너비(W)        279mm        
    깊이(D)        678.5mm

    호환성
    파워 장착        220mm        
    파워 위치        하단후면
    GPU 장착        589mm        
    CPU쿨러 장착        198mm
    수랭쿨러 규격        최대4열 지원        
    라디에이터(상단)        최대480mm, 420mm
    라디에이터(전면)        최대480mm, 420mm

    LED 튜닝
    내부 LED 바        O

    컨트롤러 지원
    외부LED 컨트롤        O
    `, image: '/images/LIAN-LI V3000 PLUS (빅타워).jpg'},
    { type: '쿨러', name: 'CORSAIR iCUE H150i ELITE LCD XT WHITE', performance: 180, price: 469000, manufacturer:'CORSAIR', release:'2023.02.',
    detail:`
    제조회사        CORSAIR        
    등록년월        2023년 02월
    냉각 방식        수랭        
    A/S기간        5년
    무게        1180g        
    라디에이터        3열

    인텔 소켓
    LGA1700        O        
    LGA1200        O
    LGA115x        O        
    LGA2066        O
    LGA2011-V3        O        
    LGA2011        O

    AMD 소켓
    AM5        O        
    AM4        O
    sTRX4        O

    [쿨링팬]
    팬 크기        120mm        
    팬 개수        3개
    팬 두께        25T        
    베어링        FDB
    최대 팬속도        2100 RPM        
    최대 풍량        65.57 CFM
    풍압(정압)        2.68mmH₂O        
    최대 팬소음        34.1dBA

    부가기능
    LED 라이트        O        
    PWM 지원        O
    RGB 컨트롤러        O        
    팬 컨트롤러        O
    LCD        O        
    제로팬(0-dB기술)        O

    LED시스템
    제조사 소프트웨어        O
    `, image: '/images/CORSAIR iCUE H150i ELITE LCD XT WHITE.jpg'},

    { type: 'CPU', name: '라이젠9 5세대 라파엘 7950X3D', performance: 195, price: 965000, manufacturer:'AMD', release:'2023.02.',
    detail:`
    제조회사        AMD        
    등록년월        2023년 02월
    AMD CPU종류        라이젠9-5세대        
    소켓 구분        AMD(소켓AM5)
    세대 구분        5세대(Zen4)        
    출시일        2023 1분기
    제조 공정        5nm        
    PPT        162W
    PCIe 버전        PCIe5.0        
    최대 PCIe 레인수        28레인

    사양
    코어 수        16코어        
    쓰레드 수        32쓰레드
    기본 클럭        4.2GHz        
    최대 클럭        5.7GHz
    L2 캐시        16MB        
    L3 캐시        128MB
    TDP        120W

    메모리 사양
    최대 메모리 크기        128GB        
    메모리 규격        DDR5
    메모리 클럭        5200MHz        
    메모리 채널        2

    그래픽 사양
    내장그래픽        탑재        
    GPU 모델명        AMD 라데온 그래픽
    GPU 코어 속도        2,200MHz

    기술 지원
    Ryzen Master        O        
    3D V캐시        O

    구성
    패키지 형태        정품        
    쿨러        미포함
    `, image: '/images/라이젠9 5세대 라파엘 7950X3D.jpg'},
    { type: 'gpu', name: 'Colorful iGAME GeForce RTX 4080 Neptune OC D6X 16GB', performance: 180, price: 2159000, manufacturer:'COLORFUL', release:'2022.11.',
    detail:`
    제조회사        COLORFUL        
    등록년월        2022년 11월

    칩셋 사양
    칩셋 제조사        NVIDIA        
    제품 시리즈        지포스 RTX 40
    GPU 제조 공정        4nm        
    NVIDIA 칩셋        RTX 4080
    베이스클럭        2205MHz        
    부스트클럭        2640MHz
    쿠다 프로세서        9728개        
    인터페이스        PCIe4.0x16

    메모리 사양
    메모리 종류        GDDR6X(DDR6X)        
    메모리 클럭        22400MHz
    메모리 용량        16GB        
    메모리 버스        256-bit

    그래픽 출력
    HDMI        1개        
    DisplayPort        3개
    모니터 지원        최대 모니터 4개

    부가기능
    8K 지원        O        
    4K 지원        O
    HDR 지원        O        
    HDCP 2.3        O

    전력 관련
    사용전력        최대 380W        
    권장 파워용량        정격파워 850W 이상
    전원 포트        16핀(12VHPWR) x1        
    전원부        22+4페이즈

    냉각방식
    방열판        O        
    히트파이프        O
    팬쿨러        O        
    수냉 쿨링        O

    제품 외형
    팬 개수        3개 팬        
    가로(길이)        253.5mm
    두께        41.5mm

    추가 구성
    백플레이트        O        
    LED 라이트        O
    오버클럭 물리키        O        
    수냉 장착 지원        O

    LED 위치
    전면 LED        O        
    측면 LED        O
    팬 LED        O

    구성품
    4x8핀 to 16핀 커넥터        O
    `, image: '/images/Colorful iGAME GeForce RTX 4080 Neptune OC D6X 16GB.jpg'},
    { type: '메인보드', name: 'ASRock X670E Taichi 에즈윈 (AMD X670/ATX)', performance: 150, price: 939000, manufacturer:'ASRock', release:'2022.09.',
    detail:`
    제조회사        ASRock        
    등록년월        2022년 09월

    기본 사양
    제품 분류        AMD CPU용        
    CPU 소켓        AMD(소켓AM5)
    세부 칩셋        AMD X670E        
    CPU 장착수        1개
    폼팩터        E-ATX (30.5x26.7cm)        
    전원부        24+2+1페이즈

    메모리
    메모리 종류        DDR5        
    메모리 속도        6600MHz (PC5-52800)
    메모리 슬롯        4개        
    메모리 채널        듀얼
    메모리 용량        최대 128GB

    메모리 기술
    XMP        O        
    EXPO        O

    확장슬롯
    VGA 연결        PCIe5.0 x16

    PCIe버전
    PCIe5.0        O

    PCIe슬롯
    PCIex16        1개

    멀티 GPU
    CrossFire        O

    저장장치        
    M.2        4개
    SATA3        8개        
    USB4        후면 2개
    USB 3.1        후면 5개        
    USB 3.0        후면 3개
    RGB 4핀        1개        
    ARGB 3핀        3개
    시스템팬 4핀        6개        
    USB2.0 헤더        2개
    USB3.0 헤더        2개        
    USB3.2 Type C 헤더        1개
    LED 시스템        POLYCHROME

    M.2 연결
    PCIe5.0        O        
    PCIe4.0        O
    NVMe        O        
    SATA        O

    M.2 폼팩터
    2230        O        
    2242        O
    2260        O        
    2280        O
    22110        O

    RAID 지원
    NVMe RAID        O        
    SATA RAID        O

    그래픽 출력
    HDMI        O        
    Type-C        O

    후면단자
    USB4        O        
    USB 3.1        O
    USB 3.0        O        
    RJ-45        O
    S/PDIF        O        
    오디오잭        O

    네트워크
    유선랜 칩셋        Killer E3100G        
    유선랜 속도        2.5기가비트
    RJ-45        1개

    무선랜 종류
    무선랜(Wi-Fi)        O        
    블루투스        O

    오디오
    오디오 칩셋        Realtek ALC4082        
    아날로그 출력        5.1채널(6ch)

    I/O 헤더
    USB 3.0 헤더        O        
    USB 2.0 헤더        O
    USB3.2 Type C 헤더        O        
    RGB 12V 4핀 헤더        O
    ARGB 5V 3핀 헤더        O

    특징
    SPS(DrMOS)        O        
    M.2 히트싱크        O
    LED 라이트        O        
    UEFI        O

    LED 위치
    내장형(온보드) LED        O        
    로고 LED        O
    히트싱크 LED        O
    `, image: '/images/ASRock X670E Taichi 에즈윈 (AMD X670, ATX).jpg'},
    { type: '램', name: 'OLOy DDR5-6200 CL32 BLADE RGB MIRROR 패키지 (32GB(16Gx2))', performance: 150, price: 543950, manufacturer:'OLOy', release:'2021.12.',
    detail:`
    제조회사        OLOy        
    등록년월        2021년 12월
    사용 장치        데스크탑용        
    제품 분류        DDR5
    메모리 규격        DIMM        
    메모리 용량        32GB
    동작클럭(대역폭)        6200MHz (PC5-49600)        
    램타이밍        CL32-38-38-76
    동작전압        1.35V        
    램개수        2개
    히트싱크        방열판        
    방열판 색상        실버/그레이
    LED색상        RGB

    부가기능
    LED 라이트        O        
    온다이ECC        O
    LED 시스템
    AURA SYNC        O        
    MYSTIC LIGHT        O
    RGB FUSION        O        
    POLYCHROME        O
    `, image: '/images/OLOy DDR5-6200 CL32 BLADE RGB MIRROR 패키지 (32GB(16Gx2)).jpg'},
    { type: 'SSD', name: '마이크론 Crucial T700 M.2 NVMe 2280 아스크텍 [4TB TLC] Heatsink', performance: 150, price: 915000, manufacturer:'마이크론', release:'2023.05.',
    detail:`
    제조회사        마이크론        
    등록년월        2023년 05월

    [기본사양]
    제품분류        내장형SSD        
    폼팩터        M.2 (2280)
    인터페이스        PCIe5.0x4 (128GT/s)        
    프로토콜        NVMe 2.0
    용량        4TB        
    메모리 타입        TLC(기타)
    낸드 구조        3D낸드        
    RAM 탑재        DRAM 탑재
    RAM 타입        DDR4        
    컨트롤러        파이슨 E26

    [성능]
    순차읽기        12,400MB/s        
    순차쓰기        11,800MB/s
    읽기IOPS        1,500K        
    쓰기IOPS        1,500K

    지원기능
    TRIM        O        
    GC        O
    S.M.A.R.T        O        
    ECC        O

    [환경특성]
    MTBF        150만시간
    TBW        2,400TB

    A/S기간
    5년        O        
    제한보증        O

    쿨링 정보
    NVMe 방열판        방열판 포함

    [크기/무게]
    가로        80mm        
    세로        23mm
    두께        21mm        
    무게        55g
    `, image: '/images/마이크론 Crucial T700 M.2 NVMe 2280 아스크텍 [4TB TLC] Heatsink.jpg'},
    { type: '파워', name: 'be quiet DARK POWER PRO 13 1600W 80PLUS TITANIUM (ATX/1600W)', performance: 200, price: 837000, manufacturer:'be quiet!', release:'2023.10.',
    detail:`
    제조회사        be quiet        
    등록년월        2023년 10월
    제품 분류        ATX 파워        
    정격출력        1600W
    80PLUS인증        80 PLUS 티타늄        
    +12V 출력방식        +12V 싱글/다중
    PFC회로        액티브PFC        
    쿨링팬 크기        135mm 팬
    쿨링팬 개수        1개(팬)        
    베어링        FDB(유체)
    깊이        200mm        
    A/S 보증기간        무상 10년
    DC 출력
    +3.3V 출력        25A        
    +5V 출력        25A
    -12V 출력        0.5A        
    +5Vsb 출력        3.5A

    [커넥터]
    케이블연결        풀모듈러        
    메인전원        24핀(20+4)
    보조전원        8+4+4핀 1개        
    PCIe 16핀(12+4)        12VHPWR 2개
    PCIe 8핀(6+2)        6개        
    SATA        16개

    부가기능
    대기전력 1W 미만        O

    내부설계
    105도 콘덴서        O        
    DC to DC 설계        O
    LLC공진형컨버터        O

    보호회로
    과전압(OVP)        O        
    저전압(UVP)        O
    과전류(OCP)        O        
    과전력(OPP)        O
    과열(OTP/OHP)        O        
    단락(SCP)        O
    서지+인러쉬(SIP)        O
    `, image: '/images/be quiet DARK POWER PRO 13 1600W 80PLUS TITANIUM (ATX, 1600W).jpg'},
    { type: '케이스', name: '쿨러마스터 COSMOS C700M 화이트 (빅타워)', performance: 200, price: 835000, manufacturer:'쿨러마스터', release:'2022.09.',
    detail:`
    제조회사        쿨러마스터        
    등록년월        2022년 09월
    제품 분류        PC케이스(ATX)        
    케이스 크기        빅타워
    파워포함여부        파워미포함        
    높이(H)        651mm
    라디에이터(하단)        240mm, 140mm최대

    지원보드규격
    Extended-ATX        O        
    표준-ATX        O
    Micro-ATX        O        
    Mini-ITX        O

    내부 확장
    13.3cm베이        1개        
    8.9cm베이        4개
    6.4cm베이        2개        
    저장장치 장착        최대 6개
    PCI 슬롯(수평)        8개

    쿨러 / 튜닝
    쿨링팬        총4개        
    측면 개폐 방식        스윙도어
    측면        강화유리        
    후면        140mm x1
    전면        140mm x3        
    먼지필터        부분

    외부포트
    USB 3.0        O        
    USB 3.1 (Type-C)        O

    크기
    너비(W)        306mm        
    깊이(D)        650mm

    호환성
    파워 위치        하단후면        
    GPU 장착        490mm
    CPU쿨러 장착        198mm        
    수랭쿨러 규격        최대3열 지원
    라디에이터(상단)        최대420mm, 360mm        
    라디에이터(전면)        최대420mm, 360mm
    라디에이터(후면)        최대140mm, 120mm

    LED 튜닝
    외부 LED        O

    컨트롤러 지원
    팬 컨트롤        O        
    외부LED 컨트롤        O
    `, image: '/images/쿨러마스터 COSMOS C700M 화이트 (빅타워).jpg'},
    { type: '쿨러', name: 'KRAKEN ELITE 360 RGB (BLACK)(CPU쿨러)', performance: 180, price: 458780, manufacturer:'NZXT', release:'2023.04.',
    detail:`
    제조회사        NZXT        
    등록년월        2023년 04월
    냉각 방식        수랭        
    A/S기간        6년 이상+누수보상
    라디에이터        3열

    인텔 소켓
    LGA1700        O        
    LGA1200        O
    LGA115x        O

    AMD 소켓
    AM5        O        
    AM4        O
    TR4        O        
    sTRX4        O

    [쿨링팬]
    팬 크기        120mm        
    팬 개수        3개
    팬 두께        26T        
    팬 커넥터        4핀
    베어링        FDB        
    최대 팬속도        1800 RPM
    최대 풍량        78.86 CFM        
    풍압(정압)        2.57mmH₂O
    최대 팬소음        33.9dBA        
    팬수명        60,000시간

    작동전압
    팬 12V        O        
    LED 5V        O

    부가기능
    LED 라이트        O        
    PWM 지원        O
    RGB 컨트롤러        O         
    펌프속도조절        O
    워터블록/로고 회전        O        
    LCD        O
    제로팬(0-dB기술)        O        
    라디에이터 양면팬 지원        O

    LED시스템
    제조사 소프트웨어        O
    `, image: '/images/KRAKEN ELITE 360 RGB (BLACK)(CPU쿨러).jpg'},

//초고사양

    { type: 'CPU', name: 'AMD 라이젠5-5세대 7500F (라파엘)', performance: 50, price: 233490, manufacturer:'AMD', release:'2023.07.',
        detail:`
    제조회사	AMD	
    등록년월	2023년 07월
    AMD CPU종류	라이젠5-5세대	
    소켓 구분	AMD(소켓AM5)
    세대 구분	5세대(Zen4)	
    출시일	2023 3분기
    제조 공정	5nm	PPT	88W
    PCIe 버전	PCIe5.0	
    최대 PCIe 레인수	28레인

    사양
    코어 수	6코어	
    쓰레드 수	12쓰레드
    기본 클럭	3.7GHz	
    최대 클럭	5.0GHz
    L2 캐시	6MB	
    L3 캐시	32MB
    TDP	65W		

    메모리 사양
    최대 메모리 크기	128GB	
    메모리 규격	DDR5
    메모리 클럭	5200MHz	
    메모리 채널	2

    그래픽 사양
    내장그래픽	미탑재
        `, image: '/images/AMD 라이젠5-5세대 7500F (라파엘).jpg'},
    { type: 'CPU', name: '인텔 코어i5-12세대 12400F (엘더레이크)', performance: 45, price: 183200, manufacturer:'인텔', release:'2022.01.',
    detail:`
    제조회사	인텔	
    등록년월	2022년 01월
    인텔 CPU종류	코어i5-12세대	
    소켓 구분	인텔(소켓1700)
    출시일	2022 1분기	
    제조 공정	10nm(인텔7)
    PCIe 버전	PCIe5.0, 4.0	
    최대 PCIe 레인수	20레인
    시네벤치R23(싱글)	1605	
    시네벤치R23(멀티)	12201

    사양
    코어 수	6코어	
    쓰레드 수	12쓰레드
    기본 클럭	2.5GHz	
    최대 클럭	4.4GHz
    L2 캐시	7.5MB	
    L3 캐시	18MB
    연산 체계	64비트	
    버스 속도	DMI4.0 8 GT/s
    TDP	65~117W		

    메모리 사양
    최대 메모리 크기	128GB	
    메모리 규격	DDR5, DDR4
    메모리 클럭	4800, 3200MHz	
    메모리 채널	2

    그래픽 사양
    내장그래픽	미탑재`, image: '/images/인텔 코어i5-12세대 12400F (엘더레이크).jpg'},
    { type: 'CPU', name: '인텔 코어i5-13세대 13500 (랩터레이크)', performance: 60, price: 337330, manufacturer:'인텔', release:'2023.01.',
    detail:`
    제조회사	인텔	
    등록년월	2023년 01월
    인텔 CPU종류	코어i5-13세대	
    소켓 구분	인텔(소켓1700)
    출시일	2023 1분기	
    제조 공정	10nm(인텔7)
    PBP/MTP	65~154W	
    PCIe 버전	PCIe5.0, 4.0
    최대 PCIe 레인수	20레인	

    사양
    코어 수	6+8코어	
    쓰레드 수	12+8쓰레드
    기본 클럭	2.5GHz	
    최대 클럭	4.8GHz
    L2 캐시	11.5MB	
    L3 캐시	24MB
    연산 체계	64비트	
    버스 속도	DMI4.0 8 GT/s

    메모리 사양
    최대 메모리 크기	128GB	
    메모리 규격	DDR5, DDR4
    메모리 클럭	4800, 3200MHz	
    메모리 채널	2

    그래픽 사양
    내장그래픽	탑재	
    GPU 모델명	인텔 UHD 770
    GPU 코어 속도	1,550MHz	`, image: '/images/인텔 코어i5-13세대 13500 (랩터레이크).jpg'},
    { type: 'CPU', name: '인텔 코어i5-13세대 13600K (랩터레이크)', performance: 70, price: 438510, manufacturer:'인텔', release:'2023.01.',
    detail:`
    제조회사	인텔	
    등록년월	2022년 10월
    인텔 CPU종류	코어i5-13세대	
    소켓 구분	인텔(소켓1700)
    출시일	2022 4분기	
    제조 공정	10nm(인텔7)
    PBP/MTP	125~181W	
    PCIe 버전	PCIe5.0, 4.0
    최대 PCIe 레인수	20레인

    사양
    코어 수	6+8코어	
    쓰레드 수	12+8쓰레드
    기본 클럭	3.5GHz	
    최대 클럭	5.1GHz
    L2 캐시	20MB	
    L3 캐시	24MB

    메모리 사양
    최대 메모리 크기	128GB	
    메모리 규격	DDR5, DDR4
    메모리 클럭	5600, 3200MHz	
    메모리 채널	2

    그래픽 사양
    내장그래픽	탑재	
    GPU 모델명	인텔 UHD 770
    GPU 코어 속도	1,550MHz`, image: '/images/인텔 코어i5-13세대 13600K (랩터레이크).jpg'},
    { type: 'CPU', name: 'AMD 라이젠7-5세대 7800X3D (라파엘)', performance: 180, price: 603680, manufacturer:'AMD', release:'2023.04.',
        detail:`
        제조회사	AMD	
        등록년월	2023년 04월
        AMD CPU종류	라이젠7-5세대	
        소켓 구분	AMD(소켓AM5)
        세대 구분	5세대(Zen4)	
        출시일	2023 2분기
        제조 공정	5nm	
        PCIe 버전	PCIe5.0
        최대 PCIe 레인수	28레인	
        시네벤치R23(싱글)	1820
        시네벤치R23(멀티)	18219

        사양
        코어 수	8코어	
        쓰레드 수	16쓰레드
        기본 클럭	4.2GHz	
        최대 클럭	5.0GHz
        L2 캐시	8MB	
        L3 캐시	96MB
        연산 체계	
        64비트	TDP	120W

        메모리 사양
        최대 메모리 크기	128GB	
        메모리 규격	DDR5
        메모리 클럭	5200MHz	
        메모리 채널	2

        그래픽 사양
        내장그래픽	탑재	
        GPU 모델명	AMD 라데온 그래픽
        GPU 코어 속도	2,200MHz	`, image: '/images/AMD 라이젠5-5세대 7500F (라파엘).jpg'},
        //CPU 추가

    { type: 'gpu', name: '이엠텍 지포스 GTX 1660 SUPER MIRACLE II D6 6GB', performance: 75, price: 274320, manufacturer:'이엠텍', release:'2023.01.',
    detail:`
    제조회사	이엠텍	
    등록년월	2023년 01월

    칩셋 사양
    칩셋 제조사	NVIDIA	
    제품 시리즈	지포스 16
    GPU 제조 공정	12nm	
    NVIDIA 칩셋	GTX 1660 SUPER
    베이스클럭	1530MHz	
    부스트클럭	1785MHz
    쿠다 프로세서	1408개	
    인터페이스	PCIe3.0x16

    메모리 사양
    메모리 종류	GDDR6(DDR6)	
    메모리 클럭	14000MHz
    메모리 용량	6GB	
    메모리 버스	192-bit

    그래픽 출력
    DVI	1개	
    HDMI	1개
    DisplayPort	1개	
    모니터 지원	최대 모니터 3개

    부가기능
    8K 지원	O	
    4K 지원	O
    HDR 지원	O	
    HDCP 지원	O

    전력 관련
    사용전력	최대 125W	
    권장 파워용량	정격파워 450W 이상
    전원 포트	8핀 x1	

    냉각방식
    방열판	O	
    히트파이프	O
    팬쿨러	O		

    제품 외형
    팬 개수	2개 팬	
    가로(길이)	220mm
    두께	45mm	

    추가 구성
    백플레이트	O`, image: '/images/이엠텍 지포스 GTX 1660 SUPER MIRACLE II D6 6GB.jpg'},
    { type: 'gpu', name: 'MSI 지포스 RTX 3060 벤투스 2X OC D6 12GB', performance: 80, price: 399600, manufacturer:'MSI', release:'2021.03.',
    detail:`제조회사	
    MSI	등록년월	2021년 03월

    칩셋 사양
    칩셋 제조사	NVIDIA	
    제품 시리즈	지포스 RTX 30
    GPU 제조 공정	8nm	
    NVIDIA 칩셋	RTX 3060
    부스트클럭	1807MHz	
    쿠다 프로세서	3584개
    인터페이스	PCIe4.0x16	

    메모리 사양
    메모리 종류	GDDR6(DDR6)	
    메모리 클럭	15000MHz
    메모리 용량	12GB	
    메모리 버스	192-bit

    그래픽 출력
    HDMI	1개	
    DisplayPort	3개
    모니터 지원	최대 모니터 4개	

    부가기능
    8K 지원	O	
    4K 지원	O
    HDR 지원	O	
    HDCP 2.3	O

    전력 관련
    사용전력	최대 170W	
    권장 파워용량	
    정격파워 550W 이상
    전원 포트	8핀 x1	

    냉각방식
    방열판	O	
    히트파이프	O
    팬쿨러	O		

    제품 외형
    팬 개수	2개 
    팬 가로(길이)	235mm
    두께	42mm		

    추가 구성
    백플레이트	O	`, image: '/images/MSI 지포스 RTX 3060 벤투스 2X OC D6 12GB.jpg'},
    { type: 'gpu', name: 'ASUS DUAL 라데온 RX 6600 D6 8GB 대원씨티에스', performance: 80, price: 267840, manufacturer:'ASUS', release:'2021.11.',
    detail:`제조회사	ASUS	
    등록년월	2021년 11월

    칩셋 사양
    칩셋 제조사	AMD(ATi)	
    제품 시리즈	라데온 RX 6000
    GPU 제조 공정	7nm	
    AMD 칩셋	RX 6600
    부스트클럭	2491MHz	
    스트림 프로세서	1792개
    인터페이스	PCIe4.0x16(at x8)

    메모리 사양
    메모리 종류	GDDR6(DDR6)	
    메모리 클럭	14000MHz
    메모리 용량	8GB	
    메모리 버스	128-bit

    그래픽 출력
    HDMI	1개	
    DisplayPort	3개
    모니터 지원	최대 모니터 4개		

    부가기능
    제로팬(0-dB기술)	O	
    8K 지원	O
    4K 지원	O	
    HDR 지원	O
    HDCP 2.3	O	

    전력 관련
    권장 파워용량	정격파워 500W 이상	
    전원 포트	8핀 x1

    냉각방식
    방열판	O	
    히트파이프	O
    팬쿨러	O		

    제품 외형
    팬 개수	2개 
    팬 가로(길이)	243mm
    두께	49mm	

    추가 구성
    백플레이트	O`, image: '/images/ASUS DUAL 라데온 RX 6600 D6 8GB 대원씨티에스.jpg'},
    { type: 'gpu', name: 'SAPPHIRE 라데온 RX 7600 PULSE OC D6 8GB', performance: 65, price: 186840, manufacturer:'SAPPHIRE', release:'2023.05.',
    detail:`제조회사	SAPPHIRE	
    등록년월	2023년 05월

    칩셋 사양
    칩셋 제조사	AMD(ATi)	
    제품 시리즈	라데온 RX 7000
    AMD 칩셋	
    RX 7600	부스트클럭	2754MHz
    스트림 프로세서	2048개	
    인터페이스	PCIe4.0

    메모리 사양
    메모리 종류	GDDR6(DDR6)	
    메모리 클럭	18000MHz
    메모리 용량	8GB	
    메모리 버스	128-bit

    그래픽 출력
    HDMI	1개	
    DisplayPort	3개

    부가기능
    제로팬(0-dB기술)	O	
    8K 지원	O
    4K 지원	O	
    HDR 지원	O

    전력 관련
    권장 파워용량	정격파워 550W 이상	
    전원 포트	8핀 x1

    냉각방식
    방열판	O	
    히트파이프	O
    팬쿨러	O	
    	
    제품 외형
    팬 개수	2개 
    팬 가로(길이)	240mm
    두께	44.07mm	

    추가 구성
    백플레이트	O`, image: '/images/SAPPHIRE 라데온 RX 7600 PULSE OC D6 8GB.jpg'},
    { type: 'gpu', name: 'COLORFUL 지포스 GTX 1650 토마호크 V2 D6 4GB', performance: 90, price: 267840, manufacturer:'SAPPHIRE', release:'2023.02.',
    detail:`제조회사	COLORFUL	
    등록년월	2023년 02월

    칩셋 사양
    칩셋 제조사	NVIDIA	
    제품 시리즈	지포스 16
    GPU 제조 공정	12nm	
    NVIDIA 칩셋	GTX 1650
    베이스클럭	1410MHz	
    부스트클럭	1590MHz
    쿠다 프로세서	896개	
    인터페이스	PCIe3.0x16

    메모리 사양
    메모리 종류	GDDR6(DDR6)	
    메모리 클럭	12000MHz
    메모리 용량	4GB	
    메모리 버스	128-bit

    그래픽 출력
    DVI	1개	
    HDMI	1개
    DisplayPort	1개	
    모니터 지원	최대 모니터 3개

    부가기능
    8K 지원	O	
    4K 지원	O
    HDCP 2.3	O

    전력 관련
    사용전력	최대 75W	
    전원 포트	8핀 x1
    전원부	3+1페이즈	

    냉각방식
    방열판	O	
    히트파이프	O
    팬쿨러	O	

    제품 외형
    팬 개수	2개 
    팬 가로(길이)	230.7mm
    두께	42mm`, image: '/images/COLORFUL 지포스 GTX 1650 토마호크 V2 D6 4GB.jpg'},
    //그래픽 카드 추가
 { type: 'SSD', name: '삼성전자 PM9A1 M.2 NVMe 병행수입 (512GB)', performance:40 , price: 67000, manufacturer:'삼성전자', release:'2021.02.',
    detail:`
제조회사	삼성전자
등록년월	2021년 02월
[기본사양]
제품분류	내장형SSD
폼팩터	M.2 (2280)
인터페이스	PCIe4.0x4 (64GT/s)
프로토콜		NVMe 1.3
용량	512GB
메모리 타입	TLC(기타)
낸드 구조		3D낸드
RAM 탑재	DRAM 탑재
RAM 타입	DDR4 512MB
컨트롤러	삼성
게임기 호환	PS5 호환
TBW		300TB
[성능]
순차읽기	6,900MB/s
순차쓰기	5,000MB/s
읽기IOPS	800K
쓰기IOPS	800K
지원기능
TRIM	O
SLC캐싱	O
S.M.A.R.T	O
부가기능
AES 암호화	O
[환경특성]
MTBF	150만시간
쿨링 정보
NVMe 방열판	방열판 미포함
[크기/무게]
가로	80mm
세로	22mm
두께	2.38mm
무게	9g
    `, image: '/images/삼성전자 PM9A1 M.2 NVMe 병행수입 (512GB).jpg'},
{type: 'SSD', name: '삼성전자 PM9A1 M.2 NVMe 병행수입 (2TB)', performance:80, price: 226000, manufacturer:'삼성전자', release:'2021.02.',
detail:`
제조회사	삼성전자
등록년월	2021년 02월
[기본사양]
제품분류	내장형SSD
폼팩터	M.2 (2280)
인터페이스	PCIe4.0x4 (64GT/s)
프로토콜		NVMe 1.3
용량	2TB
메모리 타입	TLC(기타)
낸드 구조	3D낸드
RAM 탑재	DRAM 탑재
RAM 타입	DDR4 2GB
컨트롤러	삼성
게임기 호환	PS5 호환
TBW	1,200TB
[성능]
순차읽기	7,000MB/s
순차쓰기	5,200MB/s
읽기IOPS	1,000K
쓰기IOPS	850K
지원기능
TRIM		O
SLC캐싱		O
S.M.A.R.T		O
부가기능
AES 암호화	O
[환경특성]
MTBF	150만시간
쿨링 정보
NVMe 방열판	방열판 미포함
[크기/무게]
가로	80mm
세로	22mm
두께	2.38mm
무게	9g
`, image: '/images/삼성전자 PM9A1 M.2 NVMe 병행수입 (2TB).jpg'},
{type:'SSD', name: 'SK하이닉스 Gold P31 M.2 NVMe (2TB)', performance:75, price: 197000, manfacturer:'SK하이닉스', release:'2021.08',
detail:`
제조회사	SK하이닉스
등록년월	2021년 08월
[기본사양]
제품분류	내장형SSD
폼팩터	M.2 (2280)
인터페이스	PCIe3.0x4 (32GT/s)
프로토콜	NVMe 1.3
용량	2TB
메모리 타입	TLC(기타)
낸드 구조	3D낸드
RAM 탑재	DRAM 탑재
RAM 타입	DDR4
컨트롤러	SK hynix Cepheus
[성능]
순차읽기	3,500MB/s
순차쓰기	3,200MB/s
읽기IOPS	570K	쓰기IOPS	600K
지원기능
TRIM	O
SLC캐싱	O
S.M.A.R.T	O
부가기능
전용 S/W	O
[환경특성]
MTBF	150만시간
TBW	1,200TB
A/S기간
5년	O
제한보증	O
쿨링 정보
NVMe 방열판	방열판 미포함
[크기/무게]
가로	80mm
세로	22mm
두께	2.3mm
무게	7g
`, image: '/images/SK하이닉스 Gold P31 M.2 NVMe (2TB).jpg'},
{type:'SSD', name:'키오시아 EXCERIA G2 M.2 NVMe (2TB)', performance:70, price:175000, manufacturer:'키오시아', release:'2022.11',
detail:`
제조회사	키오시아
등록년월	2022년 11월
[기본사양]
제품분류	내장형SSD
폼팩터	M.2 (2280)
인터페이스	PCIe3.0x4 (32GT/s)
프로토콜	NVMe 1.3
용량	2TB
메모리 타입	TLC(기타)
낸드 구조	3D낸드
RAM 탑재	DRAM 탑재
RAM 타입	확인요망
컨트롤러		KIOXIA
[성능]
순차읽기	2,100MB/s
순차쓰기	1,700MB/s
읽기IOPS	360K
쓰기IOPS	400K
지원기능
TRIM	O
GC	O
S.M.A.R.T	O
ECC	O
부가기능
전용 S/W	O
소프트웨어 지원
관리기능	O
[환경특성]
MTBF	150만시간
TBW	800TB
A/S기간
5년	O
제한보증	O
쿨링 정보
NVMe 방열판	방열판 미포함
[크기/무게]
가로	80.15mm
세로	22.15mm
두께	2.23mm
무게	7.1g
`, image:  '/images/키오시아 EXCERIA G2 M.2 NVMe (2TB).jpg'},
{type:'SSD', name:'삼성전자 980 PRO M.2 NVMe (2TB)', performance:85, price:276000, manufacturer:'삼성전자', release:'2021.03',
detail:`
제품분류	내장형SSD
폼팩터	M.2 (2280)
인터페이스 PCIe4.0x4 (64GT/s)
프로토콜	NVMe 1.3c
용량	2TB
메모리 타입	TLC(기타)
낸드 구조	3D낸드
RAM 탑재	DRAM 탑재
RAM 타입	DDR4 2GB
컨트롤러	삼성
게임기 호환	PS5 호환
TBW	1,200TB
[성능]
순차읽기	7,000MB/s
순차쓰기	5,100MB/s
읽기IOPS	1,000K
쓰기IOPS	1,000K
지원기능
TRIM	O
GC	O
SLC캐싱	O
S.M.A.R.T	O
DEVSLP	O
부가기능
AES 암호화	O
전용 S/W	O
소프트웨어 지원
마이그레이션	O
관리기능	O
[환경특성]
MTBF	150만시간
A/S기간
5년	O
쿨링 정보
NVMe 방열판	방열판 미포함
[크기/무게]
가로	80.15mm
세로	22.15mm
두께	2.38mm
무게	9g
`, image:  '/images/삼성전자 980 PRO M.2 NVMe (2TB).jpg'},
{type:'램', name:'삼성전자 DDR4-3200 (32GB) x 2', performance:100, price:176000, manufacturer:'삼성전자', release:'2020.04',
detail:`
제조회사	삼성전자
등록년월	2020년 04월
사용 장치	데스크탑용
제품 분류	DDR4
메모리 규격	DIMM
메모리 용량	32GB
동작클럭(대역폭)	3200MHz (PC4-25600)
램개수	1개
히트싱크	미포함
`, image:  '/images/삼성전자 DDR4-3200 (32GB) x 2.jpg'},
{type:'램', name:'마이크론 Crucial DDR5-5600 CL46 PRO 패키지 아스크텍 (64GB(32Gx2))', performance:200, price:300000, manufacturer:'마이크론', release:'2023.10',
detail:`
제조회사	마이크론
등록년월	2023년 10월
사용 장치	데스크탑용
제품 분류	DDR5
메모리 규격	UDIMM
메모리 용량	64GB
동작클럭(대역폭)	5600MHz (PC5-44800)
램타이밍	CL46-45-45
동작전압	1.10V
램개수	2개
히트싱크	방열판
방열판 색상	블랙
부가기능
XMP3.0		O
EXPO		O
온다이ECC 	O
`, image:  '/images/마이크론 Crucial DDR5-5600 CL46 PRO 패키지 아스크텍 (64GB(32Gx2)).jpg'},
{type:'램', name:'마이크론 Crucial DDR4-3200 CL22 (16GB) x 2', performance:60, price:94000, manufacturer:'마이크론', release:'2020.01',
detail:`
제조회사	삼성전자
상품 상세 스펙
상품 상세 정보 제공
제조회사	마이크론
등록년월	2020년 01월
사용 장치	데스크탑용
제품 분류	DDR4
메모리 규격	DIMM
메모리 용량	16GB
동작클럭(대역폭)	3200MHz (PC4-25600)
램타이밍	CL22
동작전압	1.20V
램개수	1개
히트싱크	미포함
`, image:  '/images/마이크론 Crucial DDR4-3200 CL22 (16GB) x 2.jpg'},

];

export default products;



