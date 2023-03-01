import Warrior from './abstract/Warrior';
import IAction from '../interfaces/IAction';

export default class Rider extends Warrior implements IAction {
    Move(): void {
        // Реализация продвижения лучника
    }
    Fight(): void {
      // Реализация атаки лучника
    }
  
    Defend(): void {
      // Реализация защиты лучника
    }

    RunAway(): void {
        // Реализация бега лучника
    }
  }
