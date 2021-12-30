import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { query } from 'express';

// 定义一个类，对post接口做约束
class CreatePostDto {
    title: string;
    content: string;
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({ summary: '显示帖子列表' })
    index() {
        return [];
    }

    @Post()
    @ApiOperation({ summary: "新增帖子" })
    create(@Body() body: CreatePostDto, @Query() query, @Param() param) {
        // @Body()参数装饰器
        // 后面的body名字随便取的，意思是从@Body()里面取出数据给body
        return {
            success: true,
        }
    }

    @Get(':id')
    detail() {
        return {
            id: 1,
            title: 'aaaaaa',
        };
    }
}
