import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[keyboardShortCut]',
    standalone: true
})
export class KeyboardShortCutDirective {
    @Input() keyboardShortCut = '';
    @Input() ShortCutAction: string = '';

    private ctrl = 'ctrl';


    constructor(private el: ElementRef) { }

    @HostListener('document:keydown', ['$event'])
    onKeydown(event: any): void {
        // let keys = this.keyboardShortCut.split("+");
        // let typedKey = this.findKeyName(keys[0]);
        // // confirm combine keypress
        // if (typedKey && typedKey.isModify) {
        //     // check all key pressed
        //     let allKeyPress = 0;
        //     for (let key of keys) {
        //         let typedKey: any = this.findKeyName(key);
        //         if (event[typedKey.keyName].toLowerCase() === typedKey.keyName) {
        //             allKeyPress++;
        //         }
        //     }
        //     console.log(allKeyPress);
        //     console.log(keys.length);

        //     // trigger action
        //     if (keys.length === allKeyPress) {
        //         this.keyBoardAction();
        //     }

        // }
    }


    private findKeyName(key: string): { keyName: string, isModify: boolean } | null {
        if (!key) return null;

        if (key.toLowerCase() === 'ctrl') {
            return { keyName: 'control', isModify: true }
        }
        return { keyName: key.toLowerCase(), isModify: true }
    }


    private keyBoardAction(): void {
        // focus
        if (this.ShortCutAction.toLowerCase().trim() === "focus") {
            this.el.nativeElement.focus();
        }
    }


}
