import { shuffle } from "../utils/shuffle";
import { Game } from "../components/Game";
import { TopBar } from "../components/TopBar";
import { useCharacter } from "./CharacterProvider";

export const Hiragana = () => {
  const { disableDiagraphs } = useCharacter();

  const sortedHiraganaDiagraphs = disableDiagraphs ? [] : hiraganaDiagraphs;

  const hiraganaArray = [...hiragana, ...sortedHiraganaDiagraphs];

  const shuffleHiragana = shuffle(hiraganaArray);

  return (
    <TopBar>
      <Game characters={shuffleHiragana} />
    </TopBar>
  );
};

const hiragana = [
  { label: "あ", value: "a" },
  { label: "い", value: "i" },
  { label: "う", value: "u" },
  { label: "え", value: "e" },
  { label: "お", value: "o" },
  { label: "か", value: "ka" },
  { label: "き", value: "ki" },
  { label: "く", value: "ku" },
  { label: "け", value: "ke" },
  { label: "こ", value: "ko" },
  { label: "さ", value: "sa" },
  { label: "し", value: "shi" },
  { label: "す", value: "su" },
  { label: "せ", value: "se" },
  { label: "そ", value: "so" },
  { label: "た", value: "ta" },
  { label: "ち", value: "chi" },
  { label: "つ", value: "tsu" },
  { label: "て", value: "te" },
  { label: "と", value: "to" },
  { label: "な", value: "na" },
  { label: "に", value: "ni" },
  { label: "ぬ", value: "nu" },
  { label: "ね", value: "ne" },
  { label: "の", value: "no" },
  { label: "は", value: "ha" },
  { label: "ひ", value: "hi" },
  { label: "ふ", value: "fu" },
  { label: "へ", value: "he" },
  { label: "ほ", value: "ho" },
  { label: "ま", value: "ma" },
  { label: "み", value: "mi" },
  { label: "む", value: "mu" },
  { label: "め", value: "me" },
  { label: "も", value: "mo" },
  { label: "や", value: "ya" },
  { label: "ゆ", value: "yu" },
  { label: "よ", value: "yo" },
  { label: "ら", value: "ra" },
  { label: "り", value: "ri" },
  { label: "る", value: "ru" },
  { label: "れ", value: "re" },
  { label: "ろ", value: "ro" },
  { label: "わ", value: "wa" },
  { label: "を", value: "wo" },
  { label: "ん", value: "n" },
  { label: "が", value: "ga" },
  { label: "ぎ", value: "gi" },
  { label: "ぐ", value: "gu" },
  { label: "げ", value: "ge" },
  { label: "ご", value: "go" },
  { label: "ざ", value: "za" },
  { label: "じ", value: "ji" },
  { label: "ず", value: "zu" },
  { label: "ぜ", value: "ze" },
  { label: "ぞ", value: "zo" },
  { label: "だ", value: "da" },
  { label: "ぢ", value: "ji" },
  { label: "づ", value: "zu" },
  { label: "で", value: "de" },
  { label: "ど", value: "do" },
  { label: "ば", value: "ba" },
  { label: "び", value: "bi" },
  { label: "ぶ", value: "bu" },
  { label: "べ", value: "be" },
  { label: "ぼ", value: "bo" },
  { label: "ぱ", value: "pa" },
  { label: "ぴ", value: "pi" },
  { label: "ぷ", value: "pu" },
  { label: "ぺ", value: "pe" },
  { label: "ぽ", value: "po" },
];

const hiraganaDiagraphs = [
  { label: "きゃ", value: "kya" },
  { label: "きゅ", value: "kyu" },
  { label: "きょ", value: "kyo" },
  { label: "しゃ", value: "sha" },
  { label: "しゅ", value: "shu" },
  { label: "しょ", value: "sho" },
  { label: "ちゃ", value: "cha" },
  { label: "ちゅ", value: "chu" },
  { label: "ちょ", value: "cho" },
  { label: "にゃ", value: "nya" },
  { label: "にゅ", value: "nyu" },
  { label: "にょ", value: "nyo" },
  { label: "ひゃ", value: "hya" },
  { label: "ひゅ", value: "hyu" },
  { label: "ひょ", value: "hyo" },
  { label: "みゃ", value: "mya" },
  { label: "みゅ", value: "myu" },
  { label: "みょ", value: "myo" },
  { label: "りゃ", value: "rya" },
  { label: "りゅ", value: "ryu" },
  { label: "りょ", value: "ryo" },
  { label: "ぎゃ", value: "gya" },
  { label: "ぎゅ", value: "gyu" },
  { label: "ぎょ", value: "gyo" },
  { label: "じゃ", value: "ja" },
  { label: "じゅ", value: "ju" },
  { label: "じょ", value: "jo" },
  { label: "びゃ", value: "bya" },
  { label: "びゅ", value: "byu" },
  { label: "びょ", value: "byo" },
  { label: "ぴゃ", value: "pya" },
  { label: "ぴゅ", value: "pyu" },
  { label: "ぴょ", value: "pyo" },
];
