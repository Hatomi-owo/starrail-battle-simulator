# PROJECT_MAP.md — 项目地图

> **权威范围**：文件与目录位置、入口点、**文档职责边界**、**文档治理规则**（SSOT / 冲突裁决 / 变更成本）。
> **不负责**：游戏规则 → [SPEC.md](SPEC.md)；代码结构决策 → [ARCHITECTURE.md](ARCHITECTURE.md)；任务定义 → [ROADMAP.md](ROADMAP.md)。
> **变更成本**：低。结构调整时同步更新即可，无需额外审批。
> **注意**：本文件记录**位置**，不记录规则与理由。

---

## 1. 仓库现状

> 快照日期：2026-09-11。记录"实际存在什么"，不记录"计划有什么"。

- 仓库根目录：`starrail-battle-simulator/`
- **当前尚无任何源代码、依赖或构建配置。**
- 当前实际存在的文件：

| 文件 | 说明 |
|---|---|
| `README.md` | 仓库标题（既有，未修改） |
| `.gitignore` | Node 模板（既有，未项目化） |
| `AGENTS.md` | AI 协作规则 |
| `PROJECT_MAP.md` | 本文件 |
| `SPEC.md` | 游戏规则规范（内容待填充） |
| `ARCHITECTURE.md` | 架构原则 |
| `TESTING.md` | 测试规范 |
| `ROADMAP.md` | 任务与阶段 |

- **技术栈尚未选定。** 未初始化 `package.json`，未安装任何依赖。
- **当前阶段**：Phase 0（规范建立）。见 [ROADMAP.md](ROADMAP.md)。

## 2. 目录结构

### 2.1 当前结构

```text
starrail-battle-simulator/
├── .gitignore
├── README.md
├── AGENTS.md
├── PROJECT_MAP.md
├── SPEC.md
├── ARCHITECTURE.md
├── TESTING.md
└── ROADMAP.md
```

### 2.2 目标结构

> **待定，尚未创建。**
> 目录结构属于架构决策，须先由 [ARCHITECTURE.md](ARCHITECTURE.md) 通过 ADR 决定，再回填到本节。
> 在架构决策完成前，本文件不预设任何目录。

## 3. 文档索引与职责边界

六份文档是**共享的项目真相层**。每份文档的权威范围与"不负责"内容如下：

| 文档 | 回答的问题 | 权威范围（它说了算） | **明确不负责** |
|---|---|---|---|
| [PROJECT_MAP.md](PROJECT_MAP.md) | 东西**在哪** | 目录与文件位置、入口点、文档职责边界、文档治理规则、命名约定 | 不含任何游戏规则与设计理由 |
| [SPEC.md](SPEC.md) | 游戏**是什么规则** | 机制、公式、数值、来源、证据状态、`game_version` | 不管代码怎么组织、不管任务顺序 |
| [ARCHITECTURE.md](ARCHITECTURE.md) | 代码**怎么组织** | 分层与依赖方向、核心边界、确定性要求、角色建模接口、决策记录（ADR） | 不含任何游戏数值、不含测试用例 |
| [TESTING.md](TESTING.md) | **怎么证明**它是对的 | 测试分层、样本规范、失败处理流程、覆盖目标、完成标准 | 不定义期望值本身（属 SPEC + 样本数据） |
| [ROADMAP.md](ROADMAP.md) | **先做什么** | Task ID、任务顺序、范围边界、阶段完成标准、明确不做清单 | 不管怎么做（架构）、不管规则 |
| [AGENTS.md](AGENTS.md) | AI 在这里**怎么干活** | 行为红线、阅读顺序、任务粒度、原则优先级、汇报格式、停止条件 | **不重复其他文档的内容，只引用** |

## 4. 文档治理规则

### 4.1 单一事实来源（SSOT）

> **同一个事实只能在一份文档中定义，其他文档只能引用，不得复制。**

文档漂移几乎全部来源于复制。如果需要在别处提到某事实，**写链接，不要写内容**。

### 4.2 冲突裁决

文档之间对同一事实产生分歧时，按此顺序裁决：

1. **游戏规则之争** → 以 [SPEC.md](SPEC.md) 为准
2. **代码结构之争** → 以 [ARCHITECTURE.md](ARCHITECTURE.md) 为准
3. **任务顺序与范围之争** → 以 [ROADMAP.md](ROADMAP.md) 为准
4. **测试策略之争** → 以 [TESTING.md](TESTING.md) 为准
5. **文件位置之争** → 以本文件为准
6. **任何文档与可追溯证据冲突** → **证据优先**，SPEC 必须更新
7. **上述均未覆盖** → 视为未决问题，按 [AGENTS.md](AGENTS.md) 原则 8 停止并报告

### 4.3 变更成本（刻意不对称）

修改 SPEC 比修改代码贵，这是刻意的——它是 [AGENTS.md](AGENTS.md) 原则 2 的执行保障。

| 文档 | 变更成本 | 要求 |
|---|---|---|
| [SPEC.md](SPEC.md) | **高** | 任何修改必须说明**证据变化** |
| [ARCHITECTURE.md](ARCHITECTURE.md) | 中 | 每次修改必须追加一条 **ADR 决策记录** |
| [TESTING.md](TESTING.md) | 中 | 修改需说明理由 |
| [ROADMAP.md](ROADMAP.md) | 低 | 可正常调整 |
| [PROJECT_MAP.md](PROJECT_MAP.md) | 低 | 结构变化时同步更新 |
| [AGENTS.md](AGENTS.md) | **最高** | 需**项目负责人确认** |

### 4.4 归属速查表

分类模糊时，用下表裁决事实该写进哪份文档：

| 事实 | 归属 |
|---|---|
| 某个机制的公式 | [SPEC.md](SPEC.md) |
| 某个数值、倍率、常数 | [SPEC.md](SPEC.md) |
| "某函数必须是纯函数" | [ARCHITECTURE.md](ARCHITECTURE.md) |
| "核心禁止使用某 API" | [ARCHITECTURE.md](ARCHITECTURE.md) 定义；[AGENTS.md](AGENTS.md) 引用 |
| 具体某场战斗的期望伤害数字 | [TESTING.md](TESTING.md) 定规范；具体值存样本数据 |
| "本阶段只做到哪一步" | [ROADMAP.md](ROADMAP.md) |
| 某个角色的具体数值 | 数据文件；本文件只记录它放在哪 |
| "某机制来源不可靠，暂缓" | [SPEC.md](SPEC.md) 的状态字段 |
| 某个文件放在哪个目录 | 本文件 |

## 5. 命名约定

- **文档**：全大写文件名，`*.md`，位于仓库根目录。
- **标识符格式**：机制条目 ID 由 [SPEC.md](SPEC.md) 定义；Task ID 由 [ROADMAP.md](ROADMAP.md) 定义。本文件不重复定义。
- **禁止**：同一事物在不同文档中使用不同名称。发现不一致时，以首次定义的文档为准并统一。

## 6. 入口点

- **目前无代码入口点**（尚无源码）。
- 未来入口点（如何运行、如何跑测试）在工程初始化后回填至本节。

## 7. 维护规则

- 目录或文件增删后必须同步更新第 1、2 节，否则本文件失效。
- 快照日期必须随更新刷新。
