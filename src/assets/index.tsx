import sound0 from "./sounds/vibro (0).wav";
import sound1 from "./sounds/vibro (1).wav";
import sound2 from "./sounds/vibro (2).wav";
import sound3 from "./sounds/vibro (3).wav";
import sound4 from "./sounds/vibro (4).wav";
import sound5 from "./sounds/vibro (5).wav";
import sound6 from "./sounds/vibro (6).wav";
import sound7 from "./sounds/vibro (7).wav";
import sound8 from "./sounds/vibro (8).wav";
import sound9 from "./sounds/vibro (9).wav";
import sound10 from "./sounds/vibro (10).wav";
import sound11 from "./sounds/vibro (11).wav";
import sound12 from "./sounds/vibro (12).wav";
import sound13 from "./sounds/vibro (13).wav";
import sound14 from "./sounds/vibro (14).wav";
import sound15 from "./sounds/vibro (15).wav";
import sound16 from "./sounds/vibro (16).wav";
import sound17 from "./sounds/vibro (17).wav";
import sound18 from "./sounds/vibro (18).wav";
import sound19 from "./sounds/vibro (19).wav";
import sound20 from "./sounds/vibro (20).wav";
import sound21 from "./sounds/vibro (21).wav";

const vibroMap = new Map<number, string>();
vibroMap.set(0, sound0);
vibroMap.set(1, sound1);
vibroMap.set(2, sound2);
vibroMap.set(3, sound3);
vibroMap.set(4, sound4);
vibroMap.set(5, sound5);
vibroMap.set(6, sound6);
vibroMap.set(7, sound7);
vibroMap.set(8, sound8);
vibroMap.set(9, sound9);
vibroMap.set(10, sound10);
vibroMap.set(11, sound11);
vibroMap.set(12, sound12);
vibroMap.set(13, sound13);
vibroMap.set(14, sound14);
vibroMap.set(15, sound15);
vibroMap.set(16, sound16);
vibroMap.set(17, sound17);
vibroMap.set(18, sound18);
vibroMap.set(19, sound19);
vibroMap.set(20, sound20);
vibroMap.set(21, sound21);

export default vibroMap;

import b from "./images/bb.svg";
import q from "./images/bq.svg";
import k from "./images/bk.svg";
import p from "./images/bp.svg";
import n from "./images/bn.svg";
import r from "./images/br.svg";
import B from "./images/wb.svg";
import Q from "./images/wq.svg";
import K from "./images/wk.svg";
import P from "./images/wp.svg";
import N from "./images/wn.svg";
import R from "./images/wr.svg";
import { Piece } from "../components/ChessBoard";

export const pieceImages: Record<Piece, string> = {
  "": "",
  b: b,
  r: r,
  n: n,
  p: p,
  q: q,
  k: k,
  B: B,
  R: R,
  N: N,
  P: P,
  Q: Q,
  K: K,
};
