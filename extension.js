/*
 * Copyright (c) 2013 Darren L. LaChausse
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const St = imports.gi.St;
const Main = imports.ui.main;
const Gio = imports.gi.Gio;

let button, ffm;

function enableFocusFollowsMouse() {
    ffm.set_string('focus-mode', 'mouse');
}

function disableFocusFollowsMouse() {
    ffm.set_string('focus-mode', 'click');
}

function init() {
    ffm = new Gio.Settings({schema: 'org.gnome.desktop.wm.preferences'});

    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let icon = new St.Icon({ icon_name: 'input-mouse-symbolic',
                             style_class: 'system-status-icon' });

    button.set_child(icon);
}

function enable() {
    enableFocusFollowsMouse();
    
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    disableFocusFollowsMouse();

    Main.panel._rightBox.remove_child(button);
}
