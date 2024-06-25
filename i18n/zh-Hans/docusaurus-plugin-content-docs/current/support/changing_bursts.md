---
sidebar_label: 觉醒更换
---

<sub><sup>翻译：`银河`</sup></sub>

# 觉醒更换
游戏中有5种不同类型的觉醒:

- [![](assets%2Fchanging_bursts%2Ffighting_burst.png) `Fighting Burst (F)格斗觉醒`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_38f8f443)
- [![](assets%2Fchanging_bursts%2Fshooting_burst.png) `Shooting Brust (S)射击觉醒`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_ee979f13)
- [![](assets%2Fchanging_bursts%2Fmobility_burst.png) `Mobility Brust (M)机动觉醒`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_1c66c33a)
- [![](assets%2Fchanging_bursts%2Fraging_burst.png) `Raging Brust (R)狂暴觉醒`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_68d14bdc)
- [![](assets%2Fchanging_bursts%2Fcovering_burst.png) `Covering Burst (C)支援觉醒`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_c47a5aec)
- [![](assets%2Fchanging_bursts%2Fvertical_burst.png) `Vertical Burst (V)纵向觉醒`](https://w.atwiki.jp/exvs2ob/pages/26.html#id_e1189fca)

:::info

这些觉醒是模拟游戏续作中的觉醒系统。

如果你不确定他们的效果/差异，可以点击觉醒图片后的wiki链接获取更多信息(可能需要翻译)。

:::

在 `Full Boost` 中只有两种不同的觉醒:
- `Assault Burst（突击觉醒）`
- `Blast Burst（爆发觉醒）`

由于游戏引擎的限制，几乎不可能改变游戏的UI来适应这些不同类型的觉醒。

为了解决这个问题，我们开发了一个允许玩家在游戏开始前改变觉醒的系统，下面的文章将介绍选择它们的方法。

## 射击觉醒 ![](assets%2Fchanging_bursts%2Fshooting_burst.png)
如果你想使用 `Shooting Brust（射击觉醒）`, 请在如下菜单中选择 **`Blast Burst（爆发觉醒）`**.

![blast_burst.png](assets%2Fchanging_bursts%2Fblast_burst.png)

## 其他的觉醒 ![](assets%2Fchanging_bursts%2Ffighting_burst.png) ![](assets%2Fchanging_bursts%2Fmobility_burst.png) ![](assets%2Fchanging_bursts%2Fraging_burst.png) ![](assets%2Fchanging_bursts%2Fcovering_burst.png) ![](assets%2Fchanging_bursts%2Fvertical_burst.png)
如果你想使用其他的觉醒，请在如下菜单中选择 **`Assault Burst（突击觉醒）`** .

![assault_burst.png](assets%2Fchanging_bursts%2Fassault_burst.png)

:::warning

- 只有在使用`Assault Burst（突击觉醒）`时才允许在游戏中切换到其他的觉醒.

- 你也不能在游戏中更改为`Shooting Burst（射击觉醒）`，必须在游戏开始前就选择`Blast Burst（爆发觉醒）`.

:::

### 在游戏中更改觉醒

从进入战斗完毕到准备阶段结束为止，都可以更改你的觉醒

- 模型生成完毕:

  ![first_spawn.png](assets%2Fchanging_bursts%2Ffirst_spawn.png)

- 准备阶段结束:

  ![standby_done.png](assets%2Fchanging_bursts%2Fstandby_done.png)

如果想要在这段时间里选择觉醒，请跟随以下步骤进行操作：

1. 长按`Command（通讯）`键（默认为`L1`），然后按下`Down（下方向）`键 （间隔时间不可以太长）。

   ![burst_change_activated.png](assets%2Fchanging_bursts%2Fburst_change_activated.png)
    - 如果`Fighting Burst（格斗觉醒）`的图标刷新（表现为下降），则表示选择模式已成功激活.

2. 通过`上`，`下`，`左`，`右`键选择你想要使用的觉醒，按钮映射如下:

   #### `上 ↑`
   ![](assets%2Fchanging_bursts%2Fcovering_burst.png) `Covering Burst（支援觉醒）`
   #### `下 ↓`
   ![](assets%2Fchanging_bursts%2Ffighting_burst.png) `Fighting Burst（格斗觉醒）`
   #### `左 ←`
   ![](assets%2Fchanging_bursts%2Fmobility_burst.png) `Mobility Burst（机动觉醒）`
   #### `右 →`
   ![](assets%2Fchanging_bursts%2Fraging_burst.png) `Raging Burst（狂暴觉醒）`

:::tip

![vertical_burst.png](assets%2Fchanging_bursts%2Fvertical_burst.png)  由于技术上的限制，`Vertical Burst（纵向觉醒）`只在一些机体上实装.

以下是能使用 `Vertical Burst（纵向觉醒）` 的机体列表:

- 牛高达HWS装备
- 强袭自由高达
- 海牛高达
- 飞翼高达零式
- 艾比安高达
- 勇气式指挥官用试验机
- 限正义高达（拉克丝）
- 00高达量子型全刃式
- 阿特拉斯高达

对于能使用`Vertical Burst（纵向觉醒）`的机体，映射关系更改如下:

- `上` => `Covering Burst（支援觉醒）`
- `下` => `Vertical Burst（纵向觉醒）`
- `左` => `Mobility Burst（机动觉醒）`
- `右` => `Raging Burst（狂暴觉醒）`
- `通讯` => `Fighting Burst（格斗觉醒）`

:::

3. 一旦选好觉醒，请让它保持不动直到准备阶段结束，这样选择的觉醒就能在整场对局中使用.

:::info

`Full Boost` 本身的特殊机体（如Boss / NPC）不能选择觉醒.

从`MBON`导入的 Boss 机体，觉醒的效果只会部分生效(大多数觉醒中取消路线都不能用).

:::
