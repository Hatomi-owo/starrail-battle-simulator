// P1-02 smoke test：证明 Node 可直接执行 .ts、node:test 可用。
// 不依赖任何游戏机制或 SPEC 内容。
import { test } from "node:test";
import assert from "node:assert/strict";

test("smoke: node runs .ts and node:test works", () => {
  assert.equal(1 + 1, 2);
});
