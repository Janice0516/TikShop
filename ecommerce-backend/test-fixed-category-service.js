const { Client } = require('pg');
require('dotenv').config({ path: './.env.local' });

async function testFixedCategoryService() {
  console.log('🔍 测试修复后的CategoryService...');

  const dbConfig = {
    host: 'dpg-d3kgpsd6ubrc73dvbjm0-a.oregon-postgres.render.com',
    port: 5432,
    user: 'tiktokshop_slkz_user',
    password: process.env.DB_PASSWORD,
    database: 'tiktokshop_slkz',
    ssl: {
      rejectUnauthorized: false,
    },
  };

  const client = new Client(dbConfig);

  try {
    await client.connect();
    console.log('✅ 数据库连接成功');

    // 模拟CategoryService的findAll方法
    const categories = await client.query('SELECT * FROM category ORDER BY sort ASC, id ASC');
    console.log(`查询到 ${categories.rows.length} 个分类`);

    // 模拟修复后的buildCategoryTree方法
    console.log('\n🌳 测试修复后的buildCategoryTree...');
    const categoryMap = new Map();
    const tree = [];

    // 创建分类映射 - 使用String()确保key类型一致
    categories.rows.forEach(category => {
      categoryMap.set(String(category.id), {
        ...category,
        children: [],
      });
    });

    console.log(`创建了 ${categoryMap.size} 个分类映射`);

    // 构建树形结构 - 使用String()确保key类型一致
    categories.rows.forEach(category => {
      if (Number(category.parent_id) === 0) {
        tree.push(categoryMap.get(String(category.id)));
      } else {
        const parent = categoryMap.get(String(category.parent_id));
        if (parent) {
          parent.children.push(categoryMap.get(String(category.id)));
        }
      }
    });

    console.log(`\n✅ 构建完成，根节点数量: ${tree.length}`);
    
    // 显示树结构
    tree.forEach(root => {
      console.log(`根分类: ${root.name} (${root.children.length} 个子分类)`);
      if (root.children.length > 0) {
        root.children.forEach(child => {
          console.log(`  └─ ${child.name}`);
        });
      }
    });

  } catch (error) {
    console.error('❌ 测试失败:', error.message);
  } finally {
    await client.end();
  }
}

testFixedCategoryService();
