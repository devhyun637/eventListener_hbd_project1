import React from "react";
import {
  BookWrapper,
  BackContent,
  BackPage,
  FrontContent,
  FrontPage,
  Paper,
  Sentence,
} from "./Book.styles";

const Book = ({
  isFlipped1,
  isFlipped2,
  isFlipped3,
  isFlipped4,
  isFlipped5,
  zIndex1,
  zIndex2,
  zIndex3,
  zIndex4,
  zIndex5,
}) => {
  return (
    <BookWrapper>
      <Paper zIndex={zIndex1}>
        <FrontPage flipped={isFlipped1}>
          <FrontContent>
            <img
              src="https://user-images.githubusercontent.com/59258239/133018964-45f19092-1bf3-4bbd-aaad-8f6d58a9315b.png"
              alt="표지 사진"
            />
          </FrontContent>
        </FrontPage>
        <BackPage flipped={isFlipped1}>
          <BackContent>
            <div>
              <h1>1장</h1>
              <p>
                <Sentence>
                  이 취준에서 벗어날 날은 언제야 올까. <br />
                  지그는 현관문 앞에 서서 거실에서 들려오는 웃음소리를 들으며
                  생각했다. 25살. 법적으로 보호자의 보호 아래를 벗어나야 하는
                  나이. 그렇게 현관문을 나섰다.
                </Sentence>
                (퍽)
                <Sentence>
                  송지그 : "앗..!" <br />
                  부딪힌 남자 : "뭐야? 눈 똑바로 뜨고 다녀" <br />
                  <br />
                  송지그: (취준으로 예민한 상태) "너나 눈 똑바로 뜨고 다녀.
                  아침부터 짜증나게 진짜" <br />
                  부딪힌 남자: (험악한 표정으로) "뭐라했냐 지금? 다시 말해봐"{" "}
                  <br />
                  <br />
                  송지그: "눈! 눈 똑바로 뜨고 다니라고!" <br />
                  부딪힌 남자: (놀란 표정으로) "나한테 눈 똑바로 뜨고 다니라고
                  한 여자는 너가 처음이야...!" <br />
                  <br />
                  송지그: "뭐라는거야" <br />
                  부딪힌 남자: (진지한 표정으로) "나.. 너 좋아하냐?" <br />
                  <br />
                  송지그: "캬아아아아아아아악(원기옥) 퉤잇! 아침부터 재수없게..
                  에이씨" <br />
                  부딪힌 남자: "악! 내 옷!" <br />
                  <br />
                  부딪힌 남자: "내.. 옷을 더럽힌 여자는 너가 처음이야. 너.. 내
                  여자 해라." <br />
                  송지그: "왜이래 진짜"
                </Sentence>
              </p>
            </div>
          </BackContent>
        </BackPage>
      </Paper>

      <Paper zIndex={zIndex2}>
        <FrontPage flipped={isFlipped2}>
          <FrontContent>
            <div>
              <Sentence>
                (옆에서 구경하던 김곤이라는 남자가 끼어든다.) <br />
                <br />
                김곤이: "어이, 옆에서 지켜봤는데 그만 좀 하지?" -_-^ <br />
                부딪힌 남자: (김곤이의 피지컬에 압도당하며) "뭐..뭐야?
                남자친구야 뭐야?" <br />
                김곤이: (ROKA 티셔츠 옷매무새를 가다듬으며) "그건 알 거 없고~ 갈
                길이나 가시지?" <br />
                부딪힌 남자: "싫은데? 나, 이크리스, 이 여자 포기 못한다. 좋은 말
                할때 너나 갈 길 가라." <br />
                <br />
                송지그: "어머..!"
              </Sentence>
              <Sentence>10년 후 두 명의 남편과 결혼하게 된 송지그</Sentence>
              <Sentence
                style={{
                  fontSize: "1.5rem",
                  color: "darkblue",
                  fontWeight: "bold",
                }}
              >
                루터회관에서 새로운 운명의 남자를 만나게 된다.
              </Sentence>
            </div>
          </FrontContent>
        </FrontPage>

        <BackPage flipped={isFlipped2}>
          <BackContent>
            <div>
              <Sentence>
                운명의 남자: (크록스를 질질 끌며 뚜벅뚜벅 걸어 엘리베이터 앞에
                줄을 선다. 맨 뒤에 서지 않고 새치기를 한다.) <br />
                <br />
                송지그: 저기요...? 제가 먼저 왔는데요. <br />
                운명의 남자: 아아..ㅇㅅㅇ 빛이 나서 계신지 몰랐어요 죄송합니다.
                <br />
                송지그: 네...? 그러시면서 계속 앞에 계신건 뭐죠...? <br />
                운명의 남자: (머리를 긁적이며) 하핫... 얄짤 없으시네... 뒤로
                갈게요.
              </Sentence>
              <Sentence>
                왠지 모르게 배블! 배블! 이라고 외치며 뒤로 돌아가 줄을 서는
                그... 송지그는 속으로 이상한 남자라고 생각하지만 그의 배블거리는
                소리가 어쩐지 계속 귓가에 맴돈다.
              </Sentence>
              <Sentence>
                왜일까... 어느새 엘리베이터가 도착했지만 만원으로 지그 앞에서 딱
                끊기는 엘리베이터. 어쩔 수 없이 다음 엘리베이터를 단둘이
                기다리게 된다. <br />
              </Sentence>
              <Sentence>
                그러던 중... <br /> <br />
                "따르릉 따르릉" <br /> <br />
                송지그: (갤럭시 z플립13을 촤르륵 펼치며 전화를 받는다.) 어~~
                여보세요? <br />
                이크리스: 네 여보맞는데요. 지그자기 아직도 안올라오는거보니까
                엘리베이터 못탄거야? 나랑 같이 계단으로 올라오자니까~~~~ 어어
                잠깐 김곤이가 바꿔달라네. <br /> <br />
                김곤이: 어어 여보 엘리베이터 못탔어? 여보세요? 여보세요...?{" "}
                <br /> <br />
              </Sentence>
            </div>
          </BackContent>
        </BackPage>
      </Paper>

      <Paper zIndex={zIndex3}>
        <FrontPage flipped={isFlipped3}>
          <FrontContent>
            <div>
              <h1>2장</h1>
              <Sentence>
                "..이보시오.." <br />
                <br />
                으음.. <br />
                <br />
                뒷통수의 통증이 가시지 않아 힘들게 눈을 떠보니 주변에 모여든
                사람들의 얼굴이 보였다. <br />
                <br />
                "정신이 드시오?" <br />
                <br />
                아? <br />
                <br />
                몸을 일으켜보니 사람들이 한복을 입고 있다. 주변을 살펴보니
                민속촌에나 있을법한 초가집과 돌담길이 보인다. <br />
                '나 조선시대로 온건가?'
                <br />
                <br /> 사람들 중 한 남자가 말했다. <br />
                <br />
                "이 여인이 안피터 도련님이 보쌈해온 그 여인인가보군" <br />
                "허허 딱 봐도 그냥 서민 여자애에 불과하구먼 안 도련님은 이런
                여자의 어디가 마음에 드셨을꼬" <br />
                <br />
                낯선 환경에 몹시 당황한 송지그는, 방어기제가 작동하여 원래
                인격을 드러내었다.
              </Sentence>
              <Sentence style={{ color: "red" }}>
                "XXX! XX네 XXXXX XX야 XXX냐? XXX ... XXXXX XX XXXXX 하..."
              </Sentence>
            </div>
          </FrontContent>
        </FrontPage>
        <BackPage flipped={isFlipped3}>
          <BackContent>
            <div>
              <Sentence>
                그러자 사람들이 동시에 고개를 끄덕이며 말했다.
                <br />
                <br /> "안 도련님이 왜 데려왔는지 알겠군" <br />
                "안 도련님의 옛 정인과 많이 닮았어"
              </Sentence>
              <Sentence>
                그 때, 부리나케 들어오는 안피터는 바로 송지그 앞으로 달려가며
                말했다. <br />
                <br />
                "여보게 정신이 드는가?"
              </Sentence>
              <Sentence>
                송지그는 이런 상황이 몹시 당황스러웠으나, 우테코 모의면접에서
                쌓아온 눈치 100단 꼬리질문 피하기 역량을 활용하기로 했다.
                <br />
                "지금 이게 무슨 상황인지요? 소녀는 이미 정인이 있사옵니다. 원래
                제가 있던곳으로 돌려보내주시옵소서..."
              </Sentence>
              <Sentence>
                안피터는 잠시 고민하는 듯했다. 송지그는 그 동안 카톡에서 써왔던
                눈물짓는 뽀로로 루피 이모디콘과 똑같이 표정을 지었다. 안피터의
                마음이 흔들리기 시작했다.
              </Sentence>
              <Sentence>
                "크흠... 내 지금부터 3가지 질문을 하겠다. 모두 맞추면 원래
                세계로 돌려보내주지!" <br />
                <br />
                "얏호~" <br />
                <br />
                "좋아하긴 일러! 먼저 첫번째 문제. 브라우저 렌더링 동작을
                말해보아라."
              </Sentence>
            </div>
          </BackContent>
        </BackPage>
      </Paper>

      <Paper zIndex={zIndex4}>
        <FrontPage flipped={isFlipped4}>
          <FrontContent>
            <div>
              <Sentence>
                "(잠시 당황했지만, 곧 침착하게) DOM 생성, CSSOM 생성, 렌더트리
                구축, 레이아웃, 페인트 과정을 거쳐 렌더링 되옵니다" <br />
                <br />
                "두번째 문제. 지금 두명의 남편 중에 누가 더 맘에 들지?"
                <br />
                <br />
                "(고민을 하다가, 결심을 한 듯이) <br />
                <br />내 선택은..."
                <br />
                "...선택은 ?"
                <br />
                <br /> "(갑자기 깨달은듯이) 아니, 근데 그걸 당신이 어떻게
                알지?!"
                <br />
                <br />
                혼란스러운듯 송지그는 안피터를 내려다본다. <br />
                갑자기 안피터의 얼굴이 일그러지더니 김곤이의 다그치는 목소리가
                들린다.
              </Sentence>
              <Sentence>
                "금융은 토스, 댓글은 다라쓰, 네 남편은 나잖아 이 바보야!"{" "}
              </Sentence>
              <Sentence>송지그는 홀린듯이 말했다.</Sentence>
              <Sentence>
                "맞아 금융은 토스, 댓글은 다라쓰지.
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    margin: "0 0.4rem",
                  }}
                >
                  그리고 둘중엔 김곤이다!"
                </span>
              </Sentence>
              <Sentence>
                안피터는 눈을 질끈감고 말했다. <br /> <br />
                "그렇군... 그럼 마지막 문제를 내겠다. 달리기시합 중 2등을
                앞지른다면, 몇등이되는가?"
              </Sentence>
            </div>
          </FrontContent>
        </FrontPage>
        <BackPage flipped={isFlipped4}>
          <BackContent>
            <div>
              <Sentence>
                송지그는 당연한듯이 말했다. <br /> <br /> "2등다음엔 1등이지
                멍청아"
              </Sentence>
              <Sentence>
                안피터는 부산의 향기가 진득히 느껴지는 미소를 지으며 말했다.
                <br /> <br />
                "응 2등이야~, 안보내줘~"
              </Sentence>
              <Sentence>
                송지그는 단순한 낚시에 낚였다는 사실에 분노를 주체하지 못했다.
                그 분노는 시크릿에 나오는 끌어당김의 법칙에 완벽히 부합하여,
                세상의 종말이 다가오게 되었다.
              </Sentence>
              <Sentence>
                그 때 세상에 굵직하고 섹시한 목소리가 울려퍼졌다.
              </Sentence>
              <Sentence
                style={{
                  color: "darkblue",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                "현재 일어나고 있는 종말을 다른 세상으로 <strong>토스</strong>"
              </Sentence>
              <Sentence>
                그러자 실제로 진행되던 종말이 멈추었다. 그렇게 목숨을 건진
                안피터와 부하들은 송지그를 원래세상으로 돌려보내주고, 하늘에다
                외쳤다.
              </Sentence>
              <Sentence>
                "실례가 안된다면 귀하의 존함을 여쭈어봐도 되겠나이까?"
              </Sentence>
              <Sentence>
                몇 초후 하늘에서는 짧고 강렬한 천둥소리가 들리고 그 후에는
                아무소리도 들리지 않았다. 몇몇 사람들은 마치 그 천둥소리가
                이렇게 들렸다고 한다.
              </Sentence>
            </div>
          </BackContent>
        </BackPage>
      </Paper>

      <Paper zIndex={zIndex5}>
        <FrontPage flipped={isFlipped5}>
          <FrontContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "4rem",
              }}
            >
              "키융"
            </div>
          </FrontContent>
        </FrontPage>
        <BackPage flipped={isFlipped5}>
          <BackContent>
            <img
              src="https://user-images.githubusercontent.com/59258239/133019293-e5d246f3-2707-4e36-854e-075da975aecc.jpeg"
              alt="지그곤이"
            />
          </BackContent>
        </BackPage>
      </Paper>
    </BookWrapper>
  );
};

export default Book;
