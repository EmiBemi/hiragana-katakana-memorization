import { Game } from "../components/Game";
import { shuffle } from "../utils/shuffle";
import { TopBar } from "../components/TopBar";
import { useCharacter } from "./CharacterProvider";

export const Katakana = () => {
  const { disableDiagraphs } = useCharacter();

  const sortedKatakanaDiagraphs = disableDiagraphs ? [] : katakanaDiagraphs;

  const katakanaArray = [...katakana, ...sortedKatakanaDiagraphs];

  const shuffleKatakana = shuffle(katakanaArray);

  return (
    <TopBar>
      <Game characters={shuffleKatakana} />
    </TopBar>
  );
};

const katakana = [
  { label: "ア", value: "a" },
  { label: "イ", value: "i" },
  { label: "ウ", value: "u" },
  { label: "エ", value: "e" },
  { label: "オ", value: "o" },
  { label: "カ", value: "ka" },
  { label: "キ", value: "ki" },
  { label: "ク", value: "ku" },
  { label: "ケ", value: "ke" },
  { label: "コ", value: "ko" },
  { label: "サ", value: "sa" },
  { label: "シ", value: "shi" },
  { label: "ス", value: "su" },
  { label: "セ", value: "se" },
  { label: "ソ", value: "so" },
  { label: "タ", value: "ta" },
  { label: "チ", value: "chi" },
  { label: "ツ", value: "tsu" },
  { label: "テ", value: "te" },
  { label: "ト", value: "to" },
  { label: "ナ", value: "na" },
  { label: "ニ", value: "ni" },
  { label: "ヌ", value: "nu" },
  { label: "ネ", value: "ne" },
  { label: "ノ", value: "no" },
  { label: "ハ", value: "ha" },
  { label: "ヒ", value: "hi" },
  { label: "フ", value: "fu" },
  { label: "ヘ", value: "he" },
  { label: "ホ", value: "ho" },
  { label: "マ", value: "ma" },
  { label: "ミ", value: "mi" },
  { label: "ム", value: "mu" },
  { label: "メ", value: "me" },
  { label: "モ", value: "mo" },
  { label: "ヤ", value: "ya" },
  { label: "ユ", value: "yu" },
  { label: "ヨ", value: "yo" },
  { label: "ラ", value: "ra" },
  { label: "リ", value: "ri" },
  { label: "ル", value: "ru" },
  { label: "レ", value: "re" },
  { label: "ロ", value: "ro" },
  { label: "ワ", value: "wa" },
  { label: "ヲ", value: "wo" },
  { label: "ン", value: "n" },
  { label: "ガ", value: "ga" },
  { label: "ギ", value: "gi" },
  { label: "グ", value: "gu" },
  { label: "ゲ", value: "ge" },
  { label: "ゴ", value: "go" },
  { label: "ザ", value: "za" },
  { label: "ジ", value: "ji" },
  { label: "ズ", value: "zu" },
  { label: "ゼ", value: "ze" },
  { label: "ゾ", value: "zo" },
  { label: "ダ", value: "da" },
  { label: "ヂ", value: "ji" },
  { label: "ヅ", value: "zu" },
  { label: "デ", value: "de" },
  { label: "ド", value: "do" },
  { label: "バ", value: "ba" },
  { label: "ビ", value: "bi" },
  { label: "ブ", value: "bu" },
  { label: "ベ", value: "be" },
  { label: "ボ", value: "bo" },
  { label: "パ", value: "pa" },
  { label: "ピ", value: "pi" },
  { label: "プ", value: "pu" },
  { label: "ペ", value: "pe" },
  { label: "ポ", value: "po" },
];

const katakanaDiagraphs = [
  { label: "キャ", value: "kya" },
  { label: "キュ", value: "kyu" },
  { label: "キョ", value: "kyo" },
  { label: "シャ", value: "sha" },
  { label: "シュ", value: "shu" },
  { label: "ショ", value: "sho" },
  { label: "チャ", value: "cha" },
  { label: "チュ", value: "chu" },
  { label: "チョ", value: "cho" },
  { label: "ニャ", value: "nya" },
  { label: "ニュ", value: "nyu" },
  { label: "ニョ", value: "nyo" },
  { label: "ヒャ", value: "hya" },
  { label: "ヒュ", value: "hyu" },
  { label: "ヒョ", value: "hyo" },
  { label: "ミャ", value: "mya" },
  { label: "ミュ", value: "myu" },
  { label: "ミョ", value: "myo" },
  { label: "リャ", value: "rya" },
  { label: "リュ", value: "ryu" },
  { label: "リョ", value: "ryo" },
  { label: "ギャ", value: "gya" },
  { label: "ギュ", value: "gyu" },
  { label: "ギョ", value: "gyo" },
  { label: "ジャ", value: "ja" },
  { label: "ジュ", value: "ju" },
  { label: "ジョ", value: "jo" },
  { label: "ビャ", value: "bya" },
  { label: "ビュ", value: "byu" },
  { label: "ビョ", value: "byo" },
  { label: "ピャ", value: "pya" },
  { label: "ピュ", value: "pyu" },
  { label: "ピョ", value: "pyo" },
];
