import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'links.insert': function(url,title) {
        check(url, Match.Where(url => validUrl.isUri(url)));


        Links.insert({url, title, clicks:0});
    }
});
export const Links = new Mongo.Collection('links');
