---
sidebar_label: Changing Bursts
---

# Changing Bursts
There are 5 different types of bursts implemented in the game as follows:

- [![](assets%2Fchange_burst%2Ffighting_burst.png) `Fighting Burst (F)`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_38f8f443) 
- [![](assets%2Fchange_burst%2Fshooting_burst.png) `Shooting Burst (S)`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_ee979f13) 
- [![](assets%2Fchange_burst%2Fmobility_burst.png) `Mobility Burst (M)`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_1c66c33a) 
- [![](assets%2Fchange_burst%2Fraging_burst.png) `Raging Burst (R)`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_68d14bdc)   
- [![](assets%2Fchange_burst%2Fcovering_burst.png) `Covering Burst (C)`](https://w.atwiki.jp/exvs2xb/pages/28.html#id_c47a5aec) 
- [![](assets%2Fchange_burst%2Fvertical_burst.png) `Vertical Burst (V)`](https://w.atwiki.jp/exvs2ob/pages/26.html#id_e1189fca) 

:::info

These bursts are simulating the burst systems found on sequels of this game.

If you are not sure about their perks / differences, please refer to the wiki as linked on each of the burst (translation may be required).

:::

In `Full Boost`, there are only two different bursts: 
- `Assault Burst` 
- `Blast Burst`

Due to the limitation on the game engine, it is almost impossible to change the UI of the game to accomodate for these different types of bursts. 

As a workaround for the issue, a system to allow players to change bursts before the game starts is developed, and the following article will introduce the ways to select them.

## Shooting Burst ![](assets%2Fchange_burst%2Fshooting_burst.png)
If you wish to use `Shooting Burst`, please select **`Blast Burst`** from the menu.

![blast_burst.png](assets%2Fchange_burst%2Fblast_burst.png)

## Other Bursts ![](assets%2Fchange_burst%2Ffighting_burst.png) ![](assets%2Fchange_burst%2Fmobility_burst.png) ![](assets%2Fchange_burst%2Fraging_burst.png) ![](assets%2Fchange_burst%2Fcovering_burst.png) ![](assets%2Fchange_burst%2Fvertical_burst.png)
If you wish to use any other burst, please select **`Assault Burst`** from the menu.

![assault_burst.png](assets%2Fchange_burst%2Fassault_burst.png)

:::warning

- Changing to other burst types in game is only allowed if `Assault Burst` is used.

- You also cannot change to `Shooting Burst` while in game, it must be selected by choosing `Blast Burst` before game starts.

:::

### Changing bursts in game

From the moment your unit spawns in game until the standby phase is done, you can change your burst.

- Spawn:

   ![first_spawn.png](assets%2Fchange_burst%2Ffirst_spawn.png)

- Standby ends:

   ![standby_done.png](assets%2Fchange_burst%2Fstandby_done.png) 

During these period, please follow the following steps between the specified period:

1. Press `Command` button (defaults as `L1`), then `Down` button in sequence (please do not leave too long of a gap between).

   ![burst_change_activated.png](assets%2Fchange_burst%2Fburst_change_activated.png)
   - If the `Fighting Burst` icon refreshes (goes down), it means that selection mode has been successfully activated. 

2. Select your desired burst using `Up`, `Down`, `Left`, `Right` buttons, with the button mappings as follows:

    #### `Up ↑` 
    ![](assets%2Fchange_burst%2Fcovering_burst.png) `Covering Burst`   
    #### `Down ↓`
    ![](assets%2Fchange_burst%2Ffighting_burst.png) `Fighting Burst`
    #### `Left ←`
    ![](assets%2Fchange_burst%2Fmobility_burst.png) `Mobility Burst`
    #### `Right →`
    ![](assets%2Fchange_burst%2Fraging_burst.png) `Raging Burst`

:::tip

![vertical_burst.png](assets%2Fchange_burst%2Fvertical_burst.png) `Vertical Burst` is only implemented on limited units due to technical difficulties.

Here's the list of units with Vertical Burst implemented:

- Nu Gundam HWS
- Strike Freedom Gundam
- Hi-Nu Gundam
- Wing Gundam Zero (TV)
- Gundam Epyon
- Brave Commander Test Type
- Infinite Justice Gundam (Lacus)
- 00 Qan\[T\] Full Saber
- Atlas Gundam

For units with `Vertial Burst` capabilities, the mapping is changed to below:

- `Up` => `Covering Burst`
- `Down` => `Vertical Burst`
- `Left` => `Mobility Burst`
- `Right` => `Raging Burst`
- `Command` => `Fighting Burst` (reverting back)

:::

3. Once the burst is selected, leave it until the standby phase ended, and the selected burst type will be used for throughout the match.

:::info

Special units such as Boss / NPC units that are originally from `Full Boost` do not have this system implemented. 

For Boss units imported from `MBON`, the effects of burst only applies partially (most cancel routes do not work).

:::