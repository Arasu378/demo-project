import { Injectable } from '@angular/core';
import {RequestCache} from './RequestCache';
import {HttpRequest, HttpResponse} from '@angular/common/http';
import {RequestCacheEntry} from './RequestCacheEntry';
import {MessageService} from '../utils/message.service';
const maxAge = 30000;
@Injectable()
export class RequestCacheService implements RequestCache {
  cache = new Map<string, RequestCacheEntry>();
  constructor(private messageService: MessageService) { }

  delete(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url =  req.urlWithParams;
    this.messageService.add(`Caching response from "${url}".`);
    const entry = {url, response, lastRead: Date.now()};
    this.cache.set(url, entry);
    const expired = Date.now() - maxAge;
    this.cache.forEach(entryValue => {
      if (entryValue.lastRead < expired) {
        this.cache.delete(entryValue.url);
      }
    });
    this.messageService.add(`Request cache size: ${this.cache.size}.`);
  }

  post(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url =  req.urlWithParams;
    this.messageService.add(`Caching response from "${url}".`);
    const entry = {url, response, lastRead: Date.now()};
    this.cache.set(url, entry);
    const expired = Date.now() - maxAge;
    this.cache.forEach(entryValue => {
      if (entryValue.lastRead < expired) {
        this.cache.delete(entryValue.url);
      }
    });
    this.messageService.add(`Request cache size: ${this.cache.size}.`);
  }
    put(req: HttpRequest<any>, response: HttpResponse<any>): void {
       const url =  req.urlWithParams;
       this.messageService.add(`Caching response from "${url}".`);
       const entry = {url, response, lastRead: Date.now()};
       this.cache.set(url, entry);
       const expired = Date.now() - maxAge;
       this.cache.forEach(entryValue => {
         if (entryValue.lastRead < expired) {
           this.cache.delete(entryValue.url);
         }
       });
       this.messageService.add(`Request cache size: ${this.cache.size}.`);
    }
    get(req: HttpRequest<any>): HttpResponse<any> | undefined {
       const url = req.urlWithParams;
       console.log('get cache working');
       const cached = this.cache.get(url);
       if (!cached) {
         return undefined;
       }
       const isExpired = cached.lastRead < (Date.now() - maxAge);
       const expired = isExpired ? 'expired ' : '';
       this.messageService.add(`Found ${expired} cached response for "${url}".`);
       return isExpired ? undefined : cached.response;
    }

}
